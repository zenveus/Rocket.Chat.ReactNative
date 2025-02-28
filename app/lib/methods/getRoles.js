import { sanitizedRaw } from '@nozbe/watermelondb/RawRecord';

import database from '../database';
import { getRoleById } from '../database/services/Role';
import log from '../../utils/log';
import { store as reduxStore } from '../auxStore';
import { removeRoles, setRoles as setRolesAction, updateRoles } from '../../actions/roles';
import protectedFunction from './helpers/protectedFunction';

export async function setRoles() {
	const db = database.active;
	const rolesCollection = db.get('roles');
	const allRoles = await rolesCollection.query().fetch();
	const parsed = allRoles.reduce((acc, item) => ({ ...acc, [item.id]: item.description || item.id }), {});
	reduxStore.dispatch(setRolesAction(parsed));
}

export async function onRolesChanged(ddpMessage) {
	const { type, _id, description } = ddpMessage.fields.args[0];
	if (/changed/.test(type)) {
		const db = database.active;
		const rolesCollection = db.get('roles');
		try {
			const roleRecord = await getRoleById(_id);
			if (roleRecord) {
				await db.write(async () => {
					await roleRecord.update(u => {
						u.description = description;
					});
				});
			} else {
				await db.write(async () => {
					await rolesCollection.create(post => {
						post._raw = sanitizedRaw({ id: _id, description }, rolesCollection.schema);
					});
				});
			}
			reduxStore.dispatch(updateRoles(_id, description || _id));
		} catch (e) {
			log(e);
		}
	}
	if (/removed/.test(type)) {
		const db = database.active;
		const rolesCollection = db.get('roles');
		try {
			const roleRecord = await getRoleById(_id);
			if (roleRecord) {
				await db.write(async () => {
					await roleRecord.destroyPermanently();
				});
				reduxStore.dispatch(removeRoles(_id));
			}
		} catch (e) {
			log(e);
		}
	}
}

export function getRoles() {
	const db = database.active;
	return new Promise(async resolve => {
		try {
			// RC 0.70.0
			const result = await this.sdk.get('roles.list');

			if (!result.success) {
				return resolve();
			}

			const { roles } = result;

			if (roles && roles.length) {
				await db.action(async () => {
					const rolesCollections = db.get('roles');
					const allRolesRecords = await rolesCollections.query().fetch();

					// filter roles
					let rolesToCreate = roles.filter(i1 => !allRolesRecords.find(i2 => i1._id === i2.id));
					let rolesToUpdate = allRolesRecords.filter(i1 => roles.find(i2 => i1.id === i2._id));

					// Create
					rolesToCreate = rolesToCreate.map(role =>
						rolesCollections.prepareCreate(
							protectedFunction(r => {
								r._raw = sanitizedRaw({ id: role._id }, rolesCollections.schema);
								Object.assign(r, role);
							})
						)
					);

					// Update
					rolesToUpdate = rolesToUpdate.map(role => {
						const newRole = roles.find(r => r._id === role.id);
						return role.prepareUpdate(
							protectedFunction(r => {
								Object.assign(r, newRole);
							})
						);
					});

					const allRecords = [...rolesToCreate, ...rolesToUpdate];

					try {
						await db.batch(...allRecords);
					} catch (e) {
						log(e);
					}
					setRoles();
					return allRecords.length;
				});
				return resolve();
			}
		} catch (e) {
			log(e);
			return resolve();
		}
	});
}

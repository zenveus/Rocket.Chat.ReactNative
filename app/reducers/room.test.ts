import { subscribeRoom, unsubscribeRoom, leaveRoom, deleteRoom, closeRoom, forwardRoom, removedRoom } from '../actions/room';
import { mockedStore } from './mockedStore';
import { initialState } from './room';

describe('test room reducer', () => {
	it('should return initial state', () => {
		const state = mockedStore.getState().room;
		expect(state).toEqual(initialState);
	});

	it('should return modified store after subscribeRoom', () => {
		mockedStore.dispatch(subscribeRoom('GENERAL'));
		const state = mockedStore.getState().room;
		expect(state.rooms).toEqual(['GENERAL']);
	});

	it('should return empty store after remove unsubscribeRoom', () => {
		mockedStore.dispatch(unsubscribeRoom('GENERAL'));
		const state = mockedStore.getState().room;
		expect(state.rooms).toEqual([]);
	});

	it('should return initial state after leaveRoom', () => {
		mockedStore.dispatch(leaveRoom('LEAVING', { rid: 'LEAVING' }));
		const { rid, isDeleting } = mockedStore.getState().room;
		expect(rid).toEqual('LEAVING');
		expect(isDeleting).toEqual(true);
	});

	it('should return initial state after deleteRoom', () => {
		mockedStore.dispatch(deleteRoom('DELETING', { rid: 'DELETING' }));
		const { rid, isDeleting } = mockedStore.getState().room;
		expect(rid).toEqual('DELETING');
		expect(isDeleting).toEqual(true);
	});

	it('should return initial state after closeRoom', () => {
		mockedStore.dispatch(closeRoom('CLOSING'));
		const { rid, isDeleting } = mockedStore.getState().room;
		expect(rid).toEqual('CLOSING');
		expect(isDeleting).toEqual(true);
	});

	it('should return initial state after forwardRoom', () => {
		const transferData = { roomId: 'FORWARDING' };
		mockedStore.dispatch(forwardRoom('FORWARDING', transferData));
		const { rid, isDeleting } = mockedStore.getState().room;
		expect(rid).toEqual('FORWARDING');
		expect(isDeleting).toEqual(true);
	});

	it('should return loading after call removedRoom', () => {
		mockedStore.dispatch(removedRoom());
		const { isDeleting } = mockedStore.getState().room;
		expect(isDeleting).toEqual(false);
	});
});

import React from "react";
// import Logo from "../Assets/logo.png";
import { ReactComponent as DropdownIcon } from "../Assets/icons/dropdownIcon.svg";
import { ReactComponent as TransactionIcon } from "../Assets/icons/transactionIcon.svg";
import { ReactComponent as CustomerIcon } from "../Assets/icons/customerIcon.svg";
import { ReactComponent as CreditCardIcon } from "../Assets/icons/creditCardIcon.svg";
import { ReactComponent as BalanceIcon } from "../Assets/icons/balanceIcon.svg";
import { ReactComponent as SubscriptionIcon } from "../Assets/icons/subscriptionIcon.svg";
import { ReactComponent as PaymentIcon } from "../Assets/icons/paymentIcon.svg";
import { ReactComponent as RefralIcon } from "../Assets/icons/refralIcon.svg";
import { ReactComponent as AuditIcon } from "../Assets/icons/auditIcon.svg";
import { ReactComponent as SettingIcon } from "../Assets/icons/settingIcon.svg";
import { ReactComponent as CloseIcon } from "../Assets/icons/closeIcon.svg";
import ProfileImg from "../Assets/icons/profileImage.png";
import Switch from "react-ios-switch";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  const [open, setOpen] = React.useState({
    open1: true,
    open2: false,
  });
  const [checked, setChecked] = React.useState(true);

  return (
    <div className={openSidebar ? "" : "md:hidden"}>
      <div className="bg-[#fcfcfc] w-[14vw] h-screen fixed top-0 md:w-[45vw] pt-3">
        <CloseIcon
          className="invisible md:visible ml-[2vw] cursor-pointer"
          onClick={() => setOpenSidebar(false)}
        />
        <div className="pl-[2vw] pr-2 pt-6">
          {/* <img src={Logo} alt="logo" className="w-[5vw] md:w-[10vw]" /> */}
          <h1 className="font-bold text-gray-500 text-2xl uppercase tracking-lighter">SME Mgmt. Platform</h1>
          <div className="divide-y-2">
            <div className="pt-[2.2vw]">
              <div
                className="flex flex-row items-center justify-between w-full cursor-pointer pb-[0.6vw] md:pb-[1.2vw]"
                onClick={() =>
                  setOpen({ ...open, open1: !open.open1, open2: false })
                }
              >
                <span className="md:text-[2.5vw] text-[1.2vw] font-bold text-[#828282]">
                  Payments
                </span>
                <DropdownIcon
                  className={
                    open.open1
                      ? "rotate-180 mr-[0.8vw] md:mr-[1.6vw]"
                      : "rotate-0 mr-[0.8vw] md:mr-[1.6vw]"
                  }
                />
              </div>
              <div className={open.open1 ? "" : "hidden"}>
                {[
                  {
                    name: "Transactions",
                    icon: (
                      <TransactionIcon className="w-[1.1vw] md:w-[2.4vw]" />
                    ),
                  },
                  {
                    name: "Customers",
                    icon: <CustomerIcon className="w-[1.1vw] md:w-[2.4vw]" />,
                  },
                  {
                    name: "Payouts",
                    icon: <CreditCardIcon className="w-[1.1vw] md:w-[2.4vw]" />,
                  },
                  {
                    name: "Balances",
                    icon: <BalanceIcon className="w-[1.1vw] md:w-[2.4vw]" />,
                  },
                  {
                    name: "Subscriptions",
                    icon: (
                      <SubscriptionIcon className="w-[1.1vw] md:w-[2.4vw]" />
                    ),
                  },
                  {
                    name: "Payment plans",
                    icon: <PaymentIcon className="w-[1.1vw] md:w-[2.4vw]" />,
                  },
                ].map((item, index) => {
                  return (
                    <div
                      className="flex flex-row items-center py-[0.6vw] cursor-pointer md:py-[1.2vw]"
                      key={index}
                    >
                      {item.icon}
                      <span className="text-[0.99vw] ml-[0.9vw] text-[#828282] md:text-[2vw] md:ml-[2vw]">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="pt-[0.5vw] md:pt-[1vw]">
              <div
                className="flex flex-row items-center justify-between w-full cursor-pointer pb-[0.6vw] md:pb-[1.2vw]"
                onClick={() =>
                  setOpen({ ...open, open1: false, open2: !open.open2 })
                }
              >
                <span className="md:text-[2.5vw] text-[1.2vw] font-bold text-[#828282]">
                  Commerce
                </span>
                <DropdownIcon
                  className={
                    open.open2
                      ? "rotate-180 mr-[0.8vw] md:mr-[1.6vw]"
                      : "rotate-0 mr-[0.8vw] md:mr-[1.6vw]"
                  }
                />
              </div>
              <div className={open.open2 ? "" : "hidden"}>
                {[
                  {
                    name: "Transactions",
                    icon: (
                      <TransactionIcon className="w-[1.1vw] md:w-[2.4vw]" />
                    ),
                  },
                  {
                    name: "Customers",
                    icon: <CustomerIcon className="w-[1.1vw] md:w-[2.4vw]" />,
                  },
                  {
                    name: "Payouts",
                    icon: <CreditCardIcon className="w-[1.1vw] md:w-[2.4vw]" />,
                  },
                  {
                    name: "Balances",
                    icon: <BalanceIcon className="w-[1.1vw] md:w-[2.4vw]" />,
                  },
                  {
                    name: "Subscriptions",
                    icon: (
                      <SubscriptionIcon className="w-[1.1vw] md:w-[2.4vw]" />
                    ),
                  },
                  {
                    name: "Payment plans",
                    icon: <PaymentIcon className="w-[1.1vw] md:w-[2.4vw]" />,
                  },
                ].map((item, index) => {
                  return (
                    <div
                      className="flex flex-row items-center py-[0.6vw] cursor-pointer md:py-[1.2vw]"
                      key={index}
                    >
                      {item.icon}
                      <span className="text-[0.99vw] ml-[0.9vw] text-[#828282] md:text-[2vw] md:ml-[2vw]">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="pt-[0.5vw] md:pt-[1vw]">
              <div>
                {[
                  {
                    name: "Referrals",
                    icon: <RefralIcon className="w-[1.1vw] md:w-[2.4vw]" />,
                  },
                  {
                    name: "Audit logs",
                    icon: <AuditIcon className="w-[1.1vw] md:w-[2.4vw]" />,
                  },
                  {
                    name: "Settings",
                    icon: <SettingIcon className="w-[1.1vw] md:w-[2.4vw]" />,
                  },
                ].map((item, index) => {
                  return (
                    <div
                      className="flex flex-row items-center py-[0.6vw] cursor-pointer md:py-[1.2vw]"
                      key={index}
                    >
                      {item.icon}
                      <span className="text-[0.99vw] ml-[0.9vw] text-[#828282] md:text-[2vw] md:ml-[2vw]">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex flex-row items-center justify-between w-fit pr-3 border-2 rounded-xl mt-[1.2vw]">
                <img src={ProfileImg} alt="" className="h-[8vw]" />
                <div className="flex flex-col ml-[2vw]">
                  <span className="text-[2vw] text-[#828282] font-bold">
                    Anddy’s Makeover
                  </span>
                  <span className="text-[#bdbdbd] text-[1.4vw]">
                    ID: 1234567
                  </span>
                </div>
                <DropdownIcon className="ml-[1vw]" />
              </div>
              <div className="flex flex-row justify-evenly">
                <div className="flex flex-row items-center justify-center rounded-full border-2 border-[#BDBDBD33] w-[14vw] py-[1.2vw] mt-[0.6vw]">
                  <span className="text-[1.8vw] text-[#828282]">English</span>
                  <DropdownIcon className="ml-4" />
                </div>
                <div className="flex flex-row items-center">
                  <Switch
                    checked={checked}
                    onChange={() => {
                      setChecked(!checked);
                    }}
                    pendingOffColor="#e2f5ea"
                    pendingOnColor="#e2f5ea"
                    handleColor="#6FCF97"
                  />
                  <span className="text-[2vw] text-[#828282] ml-4">Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

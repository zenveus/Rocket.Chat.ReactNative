import React from "react";
import { ReactComponent as SearchIcon } from "../Assets/icons/searchIcon.svg";
import { ReactComponent as DropdownIcon } from "../Assets/icons/langDrop.svg";
import { ReactComponent as BellIcon } from "../Assets/icons/bellIcon.svg";
import { ReactComponent as HamburgerIcon } from "../Assets/icons/hamburgerIcon.svg";
import ProfileImg from "../Assets/icons/profileImage.png";
import Switch from "react-ios-switch";

const Header = ({ setOpenSidebar, setOpenModal, openModal }) => {
  const [checked, setChecked] = React.useState(true);
  return (
    <div className="flex flex-row items-center justify-evenly pl-[16vw] pr-[2vw] mt-4 md:pl-0">
      <div>
        <button
          className="relative inline-block mt-2 bg-[#fafafa] py-[0.8vw] px-[1.1vw] rounded-xl md:py-[2.6vw] md:px-[4.2vw] invisible md:visible md:rounded-md"
          onClick={() => setOpenSidebar(true)}
        >
          <HamburgerIcon className="md:w-[4vw]" />
        </button>
      </div>
      <div className="flex flex-row items-center bg-[#FCFCFC] h-14 w-[32vw] rounded-full md:w-[50vw] ">
        <SearchIcon className="w-6 ml-6" />
        <input
          type="text"
          placeholder="Search"
          className="border-0 ml-6 bg-[#FCFCFC] text-[#BBBBBB] text-xl focus:outline-0 w-[100%]"
        />
      </div>
      <div className="flex flex-row items-center md:hidden mx-[1vw]">
        <Switch
          checked={checked}
          onChange={() => {
            setChecked(!checked);
          }}
          pendingOffColor="#e2f5ea"
          pendingOnColor="#e2f5ea"
          handleColor="#6FCF97"
        />
        <span className="text-[1.1vw] text-[#828282] ml-[0.8vw]">Live</span>
      </div>
      <div className="flex flex-row items-center justify-center rounded-full border-2 border-[#BDBDBD33] w-[9rem] py-[1vw] md:hidden ml-[1vw]">
        <span className="text-[0.9vw] text-[#828282]">English</span>
        <DropdownIcon className="ml-[0.8vw]" />
      </div>
      <div className="mx-[1vw]">
        {/* <button className="relative inline-block ml-[1.6vw] mt-[0.4vw] bg-[#fafafa] py-[0.8vw] px-[1.1vw] rounded-xl md:py-[1.6vw] md:px-[4.2vw]">
          <BellIcon className="w-[2vw] md:w-[4vw]" />
          <span className="absolute top-1 right-1 inline-block w-[0.8vw] h-[0.8vw] transform translate-x-1/2 -translate-y-1/2 bg-[#E5A0FF] rounded-full md:w-[2vw] md:h-[2vw] "></span>
        </button> */}
        <button className="ml-[1.6vw] mt-[0.4vw] bg-[#fafafa] py-[0.8vw] px-[1.1vw] rounded-xl md:py-[1.6vw] md:px-[4.2vw] md:rounded-lg" onClick={() => setOpenModal(!openModal)}>
          Form
        </button>
      </div>
      <div className="flex flex-row items-center justify-between w-[19vw] pr-[0.9vw] border-2 ml-[1vw] rounded-xl md:hidden">
        <img src={ProfileImg} alt="" className="h-[4.4vw]" />
        <div className="flex flex-col">
          <span className="text-[1vw] text-[#828282] font-bold">
            Anddy’s Makeover
          </span>
          <span className="text-[#bdbdbd] text-[0.8vw]">ID: 1234567</span>
        </div>
        <DropdownIcon />
      </div>
    </div>
  );
};

export default Header;

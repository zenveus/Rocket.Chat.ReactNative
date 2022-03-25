import React from "react";
import { ReactComponent as ArrowIcon } from "../Assets/icons/messageIcon.svg";

const Messages = () => {
  return (
    <div>
      <div className="flex flex-col w-[18vw] px-[1vw] py-[2vw] bg-white rounded-3xl my-[0.5vw] cursor-pointer md:hidden" >
        <div className="flex flex-row items-center justify-between" >
          <span className="w-[3vw] h-[3vw] bg-red-500 rounded-2xl text-white text-[1vw] flex items-center justify-center">J</span>
          <span className="text-[0.7vw] font-semibold text-[#bdbdbd]" >Jan 2 , 12:31pm</span>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col" >
            <span className="text-[1.1vw] font-semibold" >James Robinson</span>
            <span className="text-[0.8vw] font-semibold text-[#bdbdbd]" >I need some maintenac...</span>
          </div>
          <ArrowIcon className="w-[0.7vw]" />
        </div>
      </div>
    </div>
  );
};

export default Messages;

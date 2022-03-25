import React from "react";
import Messages from "./Messages";

const MessagesContainer = () => {
  return (
    <div className="fixed top-40 right-0 bg-[#f9f9f9] px-[2vw] h-[70vh] rounded-tl-3xl overflow-y-auto ">
      <span className="text-[1.2vw] font-semibold fixed bg-[#f9f9f9] pt-[2vw] pr-[20vw] pb-[1vw]">Messages</span>
      <div className="mt-[5vw]">
        <Messages />
        <Messages />
        <Messages />
        <Messages />
        <Messages />
        <Messages />
      </div>
    </div>
  );
};

export default MessagesContainer;

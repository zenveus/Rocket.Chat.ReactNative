import React from "react";
import Form from "../Components/Form";
import Header from "../Components/Header";
import MessagesContainer from "../Components/MessagesContainer";
import Modal from "../Components/Modal";
import Sidebar from "../Components/Sidebar";
 
const Dahsboard = () => {
  const [open, setOpen] = React.useState(false)
  const [openModal, setOpenModal] = React.useState(false)
  return (
    <div>
      <Header setOpenSidebar={setOpen} setOpenModal={setOpenModal} openModal={openModal} />
      <Form open={openModal} setOpen={setOpenModal} />
      <Sidebar openSidebar={open} setOpenSidebar={setOpen} />
      <MessagesContainer />
    </div>
  );
};

export default Dahsboard;

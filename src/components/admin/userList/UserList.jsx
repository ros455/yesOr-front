import React, { useState } from "react";
// import ModalProjectConfirm from "../ModalProjectConfirm";
import UserItem from "./UserItem";
const UserList = ({allusers, isOpen, setReloadUserData }) => {

  return (
    <div className="project_wrap">
      <div className="project_header">
      </div>
      {allusers.map((item) => (
        <UserItem key={item._id}
        item={item} 
        isOpen={isOpen}
        setReloadUserData={setReloadUserData}
        />
      ))}
    </div>
  );
};

export default UserList;
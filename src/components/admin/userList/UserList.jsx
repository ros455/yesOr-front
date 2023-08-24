import React, { useState } from "react";
// import ModalProjectConfirm from "../ModalProjectConfirm";
import Pagination from '../../Pagination';
import UserItem from "./UserItem";
const UserList = ({allusers, setReloadUserData }) => {
  const [paginationArray, setPaginationArray] = useState([]);
  return (
    <div className="project_wrap">
      <div className="project_header">
      </div>
      {paginationArray.length != 0 && paginationArray.map((item) => (
        <UserItem key={item._id}
        item={item} 
        setReloadUserData={setReloadUserData}
        />
      ))}
        <Pagination dataArray={allusers} setFilterArray={setPaginationArray}/>
    </div>
  );
};

export default UserList;
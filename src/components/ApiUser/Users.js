import React, { useEffect, useState } from "react";
import UsersForm from "./UsersForm";
import UsersList from "./UsersList";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState(null);

  useEffect(() => {
    axios.get("https://users-crud1.herokuapp.com/users/").then((res) => {
      setUsers(res.data);
    });
  }, []);
  const getUsers = () => {
    axios
      .get(`https://users-crud1.herokuapp.com/users/`)
      .then((res) => setUsers(res.data));
  };

  const deleteUser = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers());
    console.log(id);
  };

  const selectUser = (user) => setSelectedUsers(user);

  const deselectUsers = () => setSelectedUsers(null);

  return (
    <div className="users-home">
      <div className="users-login">
        <UsersForm
          getUsers={getUsers}
          selectedUsers={selectedUsers}
          deselectUsers={deselectUsers}
        />
      </div>
      <div className="users-actives">
        <UsersList
          users={users}
          selectUser={selectUser}
          deleteUser={deleteUser}
        />
      </div>
    </div>
  );
}

export default Users;

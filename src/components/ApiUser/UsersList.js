import React from "react";

const UsersList = ({ users, selectUser, deleteUser }) => {
  return (
    <div className="container-users-active">
      {users.map((user) => (
        <div className="row-info-users-active" key={user.id}>
          <div className="info-users-active">
            <h4>
              {user.first_name} {user.last_name}
            </h4>
            <p>{user.email}</p>
            <p>{user.birthday}</p>
          </div>
          <button className="update" onClick={() => selectUser(user)}>
            <i class="fas fa-user-edit"></i>
          </button>
          <button className="delete" onClick={() => deleteUser(user.id)}>
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      ))}
    </div>
  );
};

export default UsersList;


import axios from "axios";
import React, { useEffect, useState } from "react";

const UsersForm = ({ getUsers, selectedUsers, deselectUsers }) => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");

  useEffect(() => {
    if (selectedUsers) {
      setFirst_name(selectedUsers.first_name);
      setLast_name(selectedUsers.last_name);
      setEmail(selectedUsers.email);
      setPassword(selectedUsers.password);
      setBirthday(selectedUsers.birthday);
    } else {
      reset();
    }
  }, [selectedUsers]);

  const submit = (e) => {
    e.preventDefault();

    const user = {
      first_name,
      last_name,
      email,
      password,
      birthday: birthday
    };

    if (selectedUsers) {
      axios
        .put(
          `https://users-crud1.herokuapp.com/users/${selectedUsers.id}/`,
          user
        )
        .then(() => getUsers());
    } else {
      axios
        .post("https://users-crud1.herokuapp.com/users/", user)
        .then(() => getUsers());
    }
    reset();
  };

  const reset = () => {
    setFirst_name("");
    setLast_name("");
    setEmail("");
    setPassword("");
    setBirthday("");
  };

  return (
    <div>
      {
        <form onSubmit={submit} className="users-form">
          <h1>New User</h1>       
          <div className="complet-name">
            <input
              type="text"
              id="first_name"
              onChange={(e) => setFirst_name(e.target.value)}
              value={first_name}
              placeholder="First Name"
            />
            <input
              type="text"
              id="last_name"
              onChange={(e) => setLast_name(e.target.value)}
              value={last_name}
              placeholder="Last Name"
            />
          </div>

          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
            size="45"
          />
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="password"
            size="45"
          />
          <input
            type="date"
            id="birthday"
            onChange={(e) => setBirthday(e.target.value)}
            value={birthday}
            
          />
          <button className="submit-button">Save</button>

          <button type="button" onClick={deselectUsers}>
            Clean
          </button>
        </form>
      }
    </div>
  );
};

export default UsersForm;

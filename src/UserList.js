import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h1>List of Users</h1>
      <div className="user-cards-container">
        <ul>
          {listOfUsers.map((user) => (
            <li
              key={user.id}
              onClick={() => handleClick(user)}
              className="user-name"
            >
              {user.name}
            </li>
          ))}
        </ul>
      </div>
      {selectedUser && (
        <div className="user-card">
          <h2>{selectedUser.name}</h2>
          <p>Email: {selectedUser.email}</p>
          <p>Phone: {selectedUser.phone}</p>
          <p>Website: {selectedUser.website}</p>
          <p>Company: {selectedUser.company.name}</p>
        </div>
      )}
    </div>
  );
};

export default UserList;

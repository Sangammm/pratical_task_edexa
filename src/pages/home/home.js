import React, { useState } from "react";
import AddUser from "../../components/addUser/addUser";
import UserList from "../../components/userList/userList";

const Home = () => {
  const [users, setUsers] = useState([]);
  return (
    <div>
      <AddUser onAddUser={(user) => setUsers((u) => [user, ...u])} />

      <UserList users={users} />
    </div>
  );
};

export default Home;

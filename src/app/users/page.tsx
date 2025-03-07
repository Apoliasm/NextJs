"use client";

import { useEffect, useState } from "react";
import { searchUsers } from "../actions/user-actions";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetch(`/api/users?name=${"alice"}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setUsers(data.users);
    //   });
    searchUsers("alice").then((data) => setUsers(data));
  }, []);
  return (
    <main>
      <h1>Users</h1>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </main>
  );
}

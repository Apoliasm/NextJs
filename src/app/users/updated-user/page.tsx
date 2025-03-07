"use client";

import { userState } from "@/app/recoil/atoms";
import { useRecoilState } from "recoil";

export default function UpdatedUserPage() {
  const [user, setUser] = useRecoilState(userState);
  return (
    <div>
      <h1>Updated User</h1>
      <div>Updated User name : {user.name}</div>

      <div>Updated User email : {user.email}</div>
    </div>
  );
}

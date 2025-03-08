"use client";

import { userState } from "@/app/recoil/atoms";
import Link from "next/link";
import { useRecoilState } from "recoil";

export default function UserUpdatePage() {
  const [user, setUser] = useRecoilState(userState);
  console.log(user);
  return (
    <div>
      <h1>Update User Page</h1>
      <input
        type="email"
        placeholder="email"
        value={user.email}
        onChange={(event) =>
          setUser((prev) => ({ ...prev, email: event.target.value }))
        }
      />
      <input
        type="text"
        placeholder="name"
        value={user.name}
        onChange={(event) =>
          setUser((prev) => ({ ...prev, name: event.target.value }))
        }
      />
      <Link href="/users/updated-user">Update!</Link>
    </div>
  );
}

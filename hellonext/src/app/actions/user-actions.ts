"use server";

export async function searchUsers(name: string) {
  const DB = [
    { id: 1, name: "alice" },
    { id: 2, name: "bob" },
    { id: 3, name: "chalie" },
  ];
  return DB.filter((user) => user.name.includes(name));
}

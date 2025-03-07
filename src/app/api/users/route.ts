import { NextResponse } from "next/server";
const DB = [
  { id: 1, name: "alice" },
  { id: 2, name: "bob" },
  { id: 3, name: "chalie" },
];

export async function GET(request: Request) {
  //현재 url의 ?뒤의 내용인 searchParams를 가져옴
  const searchParams = new URL(request.url).searchParams;
  const name = searchParams.get("name") as string;

  return NextResponse.json({
    users: DB.filter((user) => user.name.includes(name)),
  });
}

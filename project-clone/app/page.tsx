import TodoUI from "app/todo/todoUI";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-2/3 flex-col mx-auto justify-center gap-4 text-center">
      <h1>main Page</h1>
      <Link className="text-xl font-bold underline" href="/todo">
        Go Todo
      </Link>
    </div>
  );
}

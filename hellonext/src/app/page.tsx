import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextJs HEllo",
  description: "Next Js asdfasdf",
};
export default function Home() {
  return (
    <main>
      home
      <Link href="/dashboard">Go Dashboard</Link>
    </main>
  );
}

import Image from "next/image";
import { Appbar } from "./components/Appbar";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";

export default function Home() {
  const session = getServerSession();
  return (
    <div>
      <Appbar />

      <div>{JSON.stringify(session)}</div>
    </div>
  );
}

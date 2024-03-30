"use client";
import { useRouter } from "next/navigation";
import { signIn, signOut } from "next-auth/react";
export function Appbar() {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => {
          signIn();
        }}
      >
        signin
      </button>
      <button
        onClick={() => {
          signOut();
        }}
      >
        signin
      </button>
    </div>
  );
}

import axios from "axios";
import Image from "next/image";
import { useState } from "react";

async function getuserdetail() {
  try {
    const response = await axios.get("http://localhost:3000/api/user");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
interface type {
  username: string;
  email: string;
}
export default async function Home() {
  const data = await getuserdetail();

  return (
    <div>
      <span>{data?.username}</span>
      <span>{data?.email}</span>
    </div>
  );
}

"use client";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState<any>(null);



  console.log(data);
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={() => {
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/`)
          .then(res => res.json())
          .then(setData);
      }}>Click me</button>
      <p>{data?.message}</p>
    </div>
  );
}

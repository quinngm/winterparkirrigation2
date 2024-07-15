"use client";

import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");

  const sendData = async (e) => {
    e.preventDefault();

    await fetch("/api/hello", {
        method: "POST",
        body: JSON.stringify({ email: email })
    }).then((res) => console.log("Response is: ", res))
  };

  return (
    <form
      onSubmit={sendData}
      className=' py-6 px-3 max-w-96 w-full bg-zinc-700 flex flex-col'
    >
      <div className='flex flex-col'>
        <label>Email</label>
        <input
          className=' text-zinc-700'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='email'
        />
      </div>


      <button
        type='submit'
        className=' w-full py-3 bg-blue-500 text-white font-bold mt-12'
      >
        Submit
      </button>
    </form>
  );
}

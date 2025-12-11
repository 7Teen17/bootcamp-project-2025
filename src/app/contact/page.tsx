"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formRef.current,
        {
          publicKey: "Y7VKHMzlpy-9Pzkv9",
        }
      );

      console.log(result.text);
      formRef.current.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex-1 flex justify-center items-center">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col justify-around w-150 h-100 bg-white p-10 rounded-xl font-serif"
      >
        <label className="block">Name:</label>
        <input
          name="name"
          className="block border border-slate-400 w-full h-10 rounded-md"
          type="text"
          id="name"
        />
        <label className="block">Email:</label>
        <input
          className="block border border-slate-400 w-full h-10 rounded-md"
          type="email"
          id="email"
          name="email"
        />
        <label className="block">Comments:</label>
        <input
          name="message"
          className="block border border-slate-400 w-full h-10 rounded-md"
          id="comments"
        ></input>
        <div className="w-full flex justify-center items-center">
          <input
            type="submit"
            className="font-mono bg-green-300 w-20 h-10 rounded-md mt-10"
          />
        </div>
      </form>
    </div>
  );
}

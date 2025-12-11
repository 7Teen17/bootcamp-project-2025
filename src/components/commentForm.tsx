"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function CommentForm({ slug }: { slug: string }) {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!author || !content) {
      setError("Name and comment are required.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`/api/blogs/${slug}/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ author, content }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) {
        setError((data && data.error) || "Failed to submit comment");
      } else {
        setSuccess("Comment posted!");
        setAuthor("");
        setContent("");
        router.refresh();
      }
    } catch (err) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col">
      {error && <div className="text-red-400 text-sm mb-2">{error}</div>}
      {success && <div className="text-green-400 text-sm mb-2">{success}</div>}
      <input
        type="text"
        value={author}
        placeholder="Your name"
        className="w-full p-2 mb-2 rounded-md bg-gray-700 text-white"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea
        placeholder="Add a comment..."
        className="w-full p-2 mb-2 rounded-md bg-gray-700 text-white resize-none"
        rows={3}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md disabled:opacity-50"
      >
        {loading ? "Posting..." : "Submit"}
      </button>
    </form>
  );
}

import React from "react";

interface CommentProps {
  author: string;
  content: string;
  date: string;
}

export default function Comment({ author, content, date }: CommentProps) {
  return (
    <div className="border border-gray-300 p-4 mb-4 rounded">
      <div className="font-bold mb-2">{author}</div>
      <div className="mb-2">{content}</div>
      <div className="text-xs text-gray-500">{date}</div>
    </div>
  );
}

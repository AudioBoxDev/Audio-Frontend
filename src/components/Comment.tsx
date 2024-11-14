import React, { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Michael Busch",
      time: "6 days ago",
      text: "Dummy comment - But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings...",
    },
    {
      id: 2,
      name: "Michael Busch",
      time: "6 days ago",
      text: "Dummy comment - But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings...",
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    setComments([
      ...comments,
      {
        id: comments.length + 1,
        name: "Drew Koski",
        time: "Just now",
        text: newComment,
      },
    ]);
    setNewComment("");
  };

  return (
    <div className="bg-black text-white mb-40 rounded-md space-y-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center border-b border-gray-700">

      <h2 className="text-lg font-semibold">2 comments</h2>
     
      </div>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-6 items-start">
            <div className="w-10 h-5 rounded-full bg-gray-700"></div>
            <div>
              <div className="flex items-center space-x-2">
                <h4 className="font-semibold">{comment.name}</h4>
                <span className="text-sm text-gray-500">{comment.time}</span>
              </div>
              <p className="text-sm text-gray-300">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col space-y-4">
        <textarea
          className="bg-[#ffffff08] text-gray-300 p-3 rounded-md resize-none focus:outline-none "
          placeholder="What are your thoughts?"
          rows={3}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <div className="flex justify-start space-x-2">
        <button
            onClick={handleAddComment}
            className="px-8 py-1 bg-[#B21988] text-white rounded-md"
          >
            Reply
          </button>
          <button
            onClick={() => setNewComment("")}
            className="px-6 py-1  text-gray-300 rounded-md hover:bg-gray-500"
          >
            Cancel
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default CommentSection;

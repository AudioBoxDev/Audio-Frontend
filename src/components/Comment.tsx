import { uploadProfileDetails } from "@/hooks/uploadProfileDetails";
import { useState } from "react";

const CommentSection = () => {
	const { artistProfileDetails } = uploadProfileDetails();
	const [comments, setComments] = useState<any[]>([
		
	]);

	const [newComment, setNewComment] = useState("");

	const handleAddComment = () => {
		if (newComment.trim() === "") return;
		setComments([
			...comments,
			{
				id: comments.length + 1,
				name: artistProfileDetails?.fullName,
				time: "Just now",
				text: newComment,
			},
		]);
		setNewComment("");
	};

	return (
		<div className="bg-black text-white mb-40 rounded-md space-y-6 w-full mx-auto">
			<div className="flex justify-between items-center border-b border-gray-700">
				<h2 className="text-lg font-semibold">{comments.length} comments</h2>
			</div>
			<div className="space-y-4">
				{comments.map((comment) => (
					<div key={comment.id} className="flex  gap-4">
						<div className="md:w-10 w-5 h-5 md:h-10 rounded-full bg-gray-700">
							<img
								src="/images/Rectangle1.png"
								className="object-cover w-full h-full rounded-full"
								alt="image"
							/>
						</div>
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
					className="bg-[#ffffff27] text-gray-300 p-3 rounded-md resize-none focus:outline-none "
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

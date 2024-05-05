import Image from "next/image";
import CommentCreateForm from "@/components/comments/comment-create-form";
import { fetchCommentByUserId } from "@/db/queries/comments";
import { GoDotFill } from "react-icons/go";

interface CommentShowProps {
  commentId: string;
  postId: string
}

// TODO: Get a list of comments
export default async function CommentShow({ commentId, postId }: CommentShowProps) {
  const comments = await fetchCommentByUserId(postId)
  const comment = comments.find((c) => c.id === commentId);

  if (!comment) {
    return null;
  }

  const children = comments.filter((c) => c.parentId === commentId);
  const renderedChildren = children.map((child) => {
    return (
      <CommentShow key={child.id} commentId={child.id} postId={postId} />
    );
  });

  const createdAtDate = new Date(comment.createdAt).toDateString();
  const currentDate = new Date(Date.now()).toDateString()
  const createdAtTime = new Date(comment.createdAt).toLocaleTimeString([], { hour12: true, hour: 'numeric', minute: '2-digit' })

  return (
    <div className="p-6 border rounded-[12px] mt-2 mb-1">
      <div className="flex gap-3">
        <Image
          src={comment.user.image || ""}
          alt="user image"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1 space-y-3">
          <div className="flex gap-2 items-center">
            <p className="text-sm font-medium text-gray-900">
              {comment.user.name}
            </p>
            <GoDotFill className="w-3 h-3 text-gray-400" />
            {currentDate === createdAtDate ? (
              <span className="text-gray-400 text-[14px]">
                Today {createdAtTime}
              </span>
            ) : (
              <span>
                {createdAtDate} {createdAtTime}
              </span>
            )
            }
          </div>
          <p className="text-gray-900">{comment.content}</p>

          <CommentCreateForm postId={comment.postId} parentId={comment.id} />
        </div>
      </div>
      <div className="pl-4">{renderedChildren}</div>
    </div>
  );
}

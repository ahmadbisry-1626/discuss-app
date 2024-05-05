import CommentShow from "@/components/comments/comment-show";
import { fetchCommentByUserId } from "@/db/queries/comments";

interface CommentListProps {
  postId: string
}

// TODO: Get a list of comments from somewhere
export default async function CommentList({ postId }: CommentListProps) {
  await new Promise(resolve => setTimeout(resolve, 2500))

  const comments = await fetchCommentByUserId(postId)

  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null
  );
  const renderedComments = topLevelComments.map((comment) => {
    return (
      <CommentShow
        key={comment.id}
        commentId={comment.id}
        postId={postId}
      />
    );
  });

  return (
    <div className="space-y-3 w-full max-w-4xl">
      <h1 className="text-lg font-bold">All {comments.length} comments</h1>
      {renderedComments}
    </div>
  );
}

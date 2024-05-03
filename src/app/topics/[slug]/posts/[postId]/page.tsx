import Link from "next/link";
import CommentList from "@/components/comments/comment-list";
import CommentCreateForm from "@/components/comments/comment-create-form";
import paths from "@/path";

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = params;

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="space-y-3">
        <Link className="underline decoration-solid" href={paths.topicShowPath(slug)}>
          {"< "}Back to {slug}
        </Link>
        {/* <PostShow /> */}
        {/* <CommentCreateForm postId={postId} startOpen /> */}
        {/* <CommentList comments={comments} /> */}
      </div>
    </div>
  );
}

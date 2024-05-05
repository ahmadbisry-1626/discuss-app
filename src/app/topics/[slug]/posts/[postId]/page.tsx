import Link from "next/link";
import CommentList from "@/components/comments/comment-list";
import CommentCreateForm from "@/components/comments/comment-create-form";
import paths from "@/path";
import PostShow from "@/components/posts/post-show";
import { Suspense } from "react";
import PostShowLoading from "@/components/posts/PostShowLoading";
import CommentShowLoading from "@/components/comments/CommentShowLoading";

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = params;

  return (
    <div className="min-h-screen flex justify-center w-full pt-32">
      <div className="space-y-3 wrapper flex flex-col gap-4">
        <Link className="hover:underline decoration-solid w-max" href={paths.topicShowPath(slug)}>
          {"< "}Back to {slug}
        </Link>
        <Suspense fallback={<PostShowLoading />}>
          <PostShow postId={postId} />
        </Suspense>
        <CommentCreateForm postId={postId} startOpen={false} />
        <Suspense fallback={<CommentShowLoading />}>
          <CommentList postId={postId} />
        </Suspense>
      </div>
    </div>
  );
}

import { db } from "@/db";
import Image from "next/image";
import { notFound } from "next/navigation";
import * as actions from '@/actions';
import { FaEllipsisH } from "react-icons/fa";

interface PostShowProps {
  postId: string
}

export default async function PostShow({ postId }: PostShowProps) {
  await new Promise(resolve => setTimeout(resolve, 2500))


  const post = await db.post.findFirst({
    where: {
      id: postId
    },
    include: {
      user: { select: { name: true, image: true } }
    }
  })

  if (!post) {
    notFound()
  }

  const createdAtDate = new Date(post.createdAt).toDateString();
  const currentDate = new Date(Date.now()).toDateString()
  const createdAtTime = new Date(post.createdAt).toLocaleTimeString([], { hour12: true, hour: 'numeric', minute: '2-digit' })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 w-full max-w-4xl">
        <div className="flex gap-2 justify-between w-full">
          <div className="flex gap-4">
            <div>
              <Image src={`${post.user.image}`} alt="" height={50} width={50} className="rounded-full" />
            </div>

            <div className="flex flex-col">
              <span className="font-medium text-[18px]">{post.user.name}</span>

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
          </div>

          <FaEllipsisH className="w-5 h-5 text-gray-400" />
        </div>


      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <p className="p-4 rounded-[12px] bg-gradient-to-r from-green-500 to-teal-600 text-gray-50 w-full max-w-4xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">{post.content}</p>
      </div>
    </div>
  );
}

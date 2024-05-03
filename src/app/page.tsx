import CardPostItems from "@/components/CardPostItems";
import CardPostItemsSkeleton from "@/components/CardPostItemsSkeleton";
import CardTopicItems from "@/components/CardTopicItems";
import CreateForm from "@/components/CreateForm";
import { db } from "@/db";
import { Input } from "@nextui-org/react";
import { BiSearchAlt } from "react-icons/bi";
import { SiApostrophe } from "react-icons/si";

export default async function Home(id: string) {
  const topic = await db.topic.findMany()
  const posts = await db.post.findMany({
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } }
    }
  })

  return (
    <div className='min-h-screen wrapper flex lg:flex-row flex-col-reverse max-md:items-center justify-center w-full gap-14 md:pt-40 pt-32'>
      <div className="w-full flex flex-col gap-6">
        <div className="flex max-lg:justify-between gap-4 items-center text-green-500">
          <div className="flex items-center gap-4">
            <SiApostrophe className="w-12 h-12" />
            <h1 className="text-[32px] font-bold">
              Top Post
            </h1>
          </div>

          <Input
            placeholder='Type to search..'
            className='max-w-[350px] md:block max-md:hidden lg:hidden'
            variant='underlined'
            color='success'
            startContent={
              <BiSearchAlt className='w-6 h-6 text-green-500' />
            }
            size='md'
          />
        </div>
        <div className='flex flex-col gap-4'>
          {posts.map((postItem) => {
            const topicSlug = postItem.topic.slug
            const user = postItem.user.name
            const comments = postItem._count.comments

            return (
              <CardPostItems key={postItem.id} postItem={postItem} topicSlug={topicSlug} user={user} comments={comments} />
            )
          })}
        </div>
      </div>

      <div className="w-full flex flex-col gap-6 max-w-xs">
        <CreateForm />

        <div className='bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-[12px] flex flex-col gap-6'>
          <h3 className='text-[20px] font-semibold text-gray-50 tracking-wide'>
            Recent Topics
          </h3>

          <div className='flex flex-wrap gap-2 text-green-500'>
            {topic.map((topicList) => (
              <CardTopicItems key={topicList.id} topicList={topicList} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

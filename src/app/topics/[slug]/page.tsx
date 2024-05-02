import CardTopic from '@/components/CardTopic'
import CreatePost from '@/components/CreatePost'
import { db } from '@/db'
import { Input } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { IoTerminal } from 'react-icons/io5'
import { RiArrowGoBackFill } from 'react-icons/ri'

interface TopicShowprops {
  params: {
    slug: string
  }
}

const TopicShow = async (props: TopicShowprops) => {
  const slug = props.params.slug

  const topic = await db.topic.findFirst({
    where: {
      slug
    }
  })

  const posts = await db.post.findMany({
    where: {
      topicId: topic?.id
    }
  });


  return (
    <div className='min-h-screen wrapper flex lg:flex-row flex-col-reverse max-md:items-center justify-center w-full gap-14 md:pt-40 pt-32'>
      <div className="w-full flex flex-col gap-6">
        <div className="flex max-lg:justify-between gap-4 items-center text-green-500">
          <div className="flex items-center gap-4">
            <IoTerminal className="w-12 h-12" />
            <h1 className="text-[32px] font-bold capitalize">
              {slug}
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
        {posts.length > 0 ?
          <div className='flex flex-col gap-4'>
            {posts.map((postById) => (
              <CardTopic postById={postById} />
            ))}
          </div>
          :
          <div className='w-full flex items-center justify-center gap-8 h-[300px] p-6 bg-gray-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-[12px]'>
            <h3 className='text-[24px] font-medium text-gray-400'>
              No post found
            </h3>
          </div>
        }

      </div>

      <div className="w-full flex flex-col gap-6 max-w-xs">
        <CreatePost slug={slug} />

        <div className='bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-[12px] flex flex-col gap-2'>
          <h3 className='text-[20px] font-semibold text-gray-50 tracking-wide capitalize'>
            {slug}
          </h3>

          <div className='flex flex-wrap gap-2 text-gray-50 capitalize'>
            <p>{topic?.description}</p>
          </div>
        </div>

        <Link href="/" className='flex gap-2 items-center justify-end text-green-500 hover:text-green-700 transition duration-300 relative group'>
          <RiArrowGoBackFill className='w-5 h-5 absolute -translate-x-10 group-hover:-translate-x-[75px] transition duration-300 opacity-0 group-hover:opacity-100' />
          <span className='font-medium z-10'>Go back</span>
        </Link>
      </div>
    </div>
  )
}

export default TopicShow
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
  const topic = await db.topic.findFirst({
    where: { slug: props.params.slug }
  })


  return (
    <div className='min-h-screen wrapper flex lg:flex-row flex-col-reverse max-md:items-center justify-center w-full gap-14 md:pt-40 pt-32'>
      <div className="w-full flex flex-col gap-6">
        <div className="flex max-lg:justify-between gap-4 items-center text-green-500">
          <div className="flex items-center gap-4">
            <IoTerminal className="w-12 h-12" />
            <h1 className="text-[32px] font-bold capitalize">
              {topic?.slug}
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
          <CardTopic />
        </div>
      </div>

      <div className="w-full flex flex-col gap-6 max-w-xs">
        <CreatePost topic={topic}/>

        <div className='bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-[12px] flex flex-col gap-2'>
          <h3 className='text-[20px] font-semibold text-gray-50 tracking-wide capitalize'>
            {topic?.slug}
          </h3>

          <div className='flex flex-wrap gap-2 text-gray-50 capitalize'>
            <p>{topic?.description}</p>
          </div>
        </div>

        <Link href="/" className='flex gap-2 items-center justify-end text-green-500 hover:text-green-700 transition duration-300 relative group'>
            <RiArrowGoBackFill className='w-5 h-5 absolute -translate-x-10 group-hover:-translate-x-[75px] transition duration-300 opacity-0 group-hover:opacity-100'/>
            <span className='font-medium z-10'>Go back</span>
        </Link>
      </div>
    </div>
  )
}

export default TopicShow
import { PostWithData } from '@/db/queries/posts';
import paths from '@/path';
import { Divider, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import Link from 'next/link';
import { FaCircle, FaRegUser } from 'react-icons/fa6';
import { FiEdit3 } from 'react-icons/fi';
import { IoEllipsisHorizontalCircleSharp } from 'react-icons/io5';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { PiWechatLogoLight } from 'react-icons/pi';

interface PostListProps {
  fetchData: () => Promise<PostWithData[]>
}

export default async function PostList({ fetchData }: PostListProps) {
  await new Promise(resolve => setTimeout(resolve, 2500))

  const posts = await fetchData()

  const renderedPosts = posts.map((post) => {
    const topicSlug = post.topic.slug;

    if (!topicSlug) {
      throw new Error('Need a slug to link to a post');
    }

    return (
      <div key={post.id} className="relative w-full flex flex-col gap-8 p-6 bg-gray-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-[12px]">
        <Link href={paths.postShowPath(topicSlug, post.id)} className='flex flex-col gap-2'>
          <h3 className="text-[20px] font-medium">
            {post.title}
          </h3>

          <p>{post.content}</p>
        </Link>

        <div className="flex items-end md:items-center justify-between">
          <div className='flex max-md:flex-col gap-6'>
            <div className='flex items-center gap-3'>
              <FaRegUser className='w-4 h-4 text-green-600' />
              <span className='text-gray-700 tracking-wide'>{post.user.name}</span>
            </div>
            <div className='flex items-center gap-3'>
              <PiWechatLogoLight className='w-6 h-6 text-green-500' />
              <span>{post._count.comments}</span>
            </div>
          </div>
          <div className='flex items-center gap-2 text-gray-400'>
            <FaCircle className='w-[6px] h-[6px] text-green-600' />
            <p>1 day ago</p>
          </div>
        </div>

        <Popover placement="left-start">
          <PopoverTrigger>
            <button className='absolute hidden md:flex right-0 top-0 !px-0 translate-y-4 -translate-x-4'>
              <IoEllipsisHorizontalCircleSharp className='w-7 h-7 text-green-600' />
            </button>
          </PopoverTrigger>
          <PopoverContent className='rounded-[4px] !shadow-md'>
            <div className="px-1 py-2 flex flex-col gap-2">
              <button
                className='bg-transparent rounded-[4px] hover:bg-gray-200 flex gap-2 items-center px-2 py-1'
              >
                <FiEdit3 className='w-5 h-5 text-green-500 mr-2' />
                <span>Edit</span>
              </button>
              <Divider />
              <button
                className='bg-transparent rounded-[4px] hover:bg-gray-200 flex gap-2 items-center px-2 py-1'
              >
                <MdOutlineDeleteOutline className='w-5 h-5 text-green-500' />
                <span className=''>Delete</span>
              </button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    );
  });

  return <div className="space-y-2">{renderedPosts}</div>;
}

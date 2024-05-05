import paths from '@/path'
import type { Post } from '@prisma/client'
import Link from 'next/link'
import React from 'react'
import { FaCircle, FaRegUser } from 'react-icons/fa6'
import { PiWechatLogoLight } from 'react-icons/pi'

export default async function CardPostItems ({ postItem, topicSlug, user, comments }: { postItem: Post, topicSlug: string, user: string | null, comments: number }) {
    await new Promise(resolve => setTimeout(resolve, 2500))

    return (
        <div className="w-full flex flex-col gap-8 p-6 bg-gray-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-[12px]">
            <Link href={paths.postShowPath(topicSlug, postItem.id)} className='flex flex-col gap-2'>
                <h3 className="text-[20px] font-medium">
                    {postItem.title}
                </h3>

                <p>{postItem.content}</p>
            </Link>

            <div className="flex items-end md:items-center justify-between">
                <div className='flex max-md:flex-col gap-6'>
                    <div className='flex items-center gap-3'>
                        <FaRegUser className='w-4 h-4 text-green-600' />
                        <span className='text-gray-700 tracking-wide'>{user}</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <PiWechatLogoLight className='w-6 h-6 text-green-500' />
                        <span>{comments}</span>
                    </div>

                    <Link href={paths.topicShowPath(topicSlug)} className='px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-teal-600'>
                        <span className='text-[14px] text-gray-50'>{topicSlug}</span>
                    </Link>
                </div>
                <div className='flex items-center gap-2 text-gray-400'>
                    <FaCircle className='w-[6px] h-[6px] text-green-600' />
                    <p>1 weeks ago</p>
                </div>
            </div>
        </div>
    )
}

import paths from '@/path'
import { Post } from '@prisma/client'
import Link from 'next/link'
import React from 'react'
import { FaCircle, FaRegUser } from 'react-icons/fa6'
import { PiWechatLogoLight } from 'react-icons/pi'

const CardTopic = ({ postById }: { postById: Post | null }) => {
    return (
        <div className="w-full flex flex-col gap-8 p-6 bg-gray-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-[12px]">
            <div className='flex flex-col gap-2'>
                <h3 className="text-[20px] font-medium">
                    {postById?.title}
                </h3>

                <p>{postById?.content}</p>
            </div>

            <div className="flex items-end md:items-center justify-between">
                <div className='flex max-md:flex-col gap-6'>
                    <div className='flex items-center gap-3'>
                        <FaRegUser className='w-4 h-4 text-green-600' />
                        <span className='text-gray-700 tracking-wide'>Arif Bustomi</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <PiWechatLogoLight className='w-6 h-6 text-green-500' />
                        <span>243</span>
                    </div>
                </div>
                <div className='flex items-center gap-2 text-gray-400'>
                    <FaCircle className='w-[6px] h-[6px] text-green-600' />
                    <p>1 day ago</p>
                </div>
            </div>
        </div>
    )
}

export default CardTopic
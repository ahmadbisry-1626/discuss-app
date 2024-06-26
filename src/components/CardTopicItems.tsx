import { topicListProps } from '@/interfaces'
import paths from '@/path'
import Link from 'next/link'
import React from 'react'

export default async function CardTopicItems({ topicList }: { topicList: topicListProps }) {
    await new Promise(resolve => setTimeout(resolve, 2500))

    return (
        <div className='flex gap-2 items-center'>
            <Link
                href={paths.topicShowPath(topicList.slug)}
                className='capitalize bg-gradient-to-r from-slate-200 to-gray-50 px-3 py-1 rounded-full shadow-sm text-[14px] hover:shadow-lg transition-all duration-200 hover:text-green-700'
            >
                {topicList.slug}
            </Link>
        </div>
    )
}
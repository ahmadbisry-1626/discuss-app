import { Skeleton } from '@nextui-org/react'
import type { Topic } from '@prisma/client'
import React from 'react'

const TopicShowLoading = ({topic}: {topic: Topic}) => {
  return (
    <div className='flex gap-2 flex-wrap'>
        <Skeleton className='px-2 py-[2px] rounded-full'>{topic.slug}</Skeleton>
    </div>
  )
}

export default TopicShowLoading
import { Skeleton } from '@nextui-org/react'
import React from 'react'

const PostShowLoading = () => {
    return (
        <div className='flex flex-col w-full max-w-4xl gap-4'>
            <div className='flex gap-2'>
                <Skeleton className='rounded-full w-[50px] h-[50px]' />

                <div className='flex flex-col gap-2'>
                    <Skeleton className='w-[200px] h-[20px] rounded-[12px]' />
                    <Skeleton className='w-[150px] h-[15px] rounded-[12px]' />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <Skeleton className="h-8 rounded-[12px]" />
                <Skeleton className="h-20 rounded-[12px]" />
            </div>
        </div>
    )
}

export default PostShowLoading
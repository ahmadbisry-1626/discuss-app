import { Skeleton } from '@nextui-org/react'
import React from 'react'

const HomePostShowLoading = () => {
    return (
        <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-2'>
                    <Skeleton className='w-[300px] rounded-[12px] h-8' />
                    <Skeleton className='w-full rounded-[12px] h-32' />
                </div>

                <div className='flex justify-between gap-2 w-full'>
                    <div className='flex gap-2'>
                        <Skeleton className='w-12 h-6 rounded-[12px]' />
                        <Skeleton className='w-12 h-6 rounded-[12px]' />
                        <Skeleton className='w-12 h-6 rounded-[12px]' />
                    </div>

                    <Skeleton className='w-20 h-6 rounded-[12px]' />
                </div>
            </div>
        </div>
    )
}

export default HomePostShowLoading
import { Skeleton } from '@nextui-org/react'
import React from 'react'

const CardPostItemsSkeleton = () => {
    return (
        <>
            <Skeleton className="w-full flex flex-col gap-8 p-6 bg-gray-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-[12px]">
                <div className='flex flex-col gap-2'>
                    <Skeleton className=" w-full" />

                    <Skeleton className='w-full h-[50px]' />
                </div>

                <div className="flex items-end md:items-center justify-between">
                    <div className='flex max-md:flex-col gap-6'>
                        <Skeleton className='w-[20px] py-2' />
                        <Skeleton className='w-[20px] py-2' />
                    </div>
                    <Skeleton className='w-[30px] py-2' />
                </div>
            </Skeleton>
            <Skeleton className="w-full flex flex-col gap-8 p-6 bg-gray-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-[12px]">
                <div className='flex flex-col gap-2'>
                    <Skeleton className=" w-full" />

                    <Skeleton className='w-full h-[50px]' />
                </div>

                <div className="flex items-end md:items-center justify-between">
                    <div className='flex max-md:flex-col gap-6'>
                        <Skeleton className='w-[20px] py-2' />
                        <Skeleton className='w-[20px] py-2' />
                    </div>
                    <Skeleton className='w-[30px] py-2' />
                </div>
            </Skeleton>
            <Skeleton className="w-full flex flex-col gap-8 p-6 bg-gray-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-[12px]">
                <div className='flex flex-col gap-2'>
                    <Skeleton className=" w-full" />

                    <Skeleton className='w-full h-[50px]' />
                </div>

                <div className="flex items-end md:items-center justify-between">
                    <div className='flex max-md:flex-col gap-6'>
                        <Skeleton className='w-[20px] py-2' />
                        <Skeleton className='w-[20px] py-2' />
                    </div>
                    <Skeleton className='w-[30px] py-2' />
                </div>
            </Skeleton>
        </>
    )
}

export default CardPostItemsSkeleton
import React from 'react'
import { FaCircle, FaRegUser } from 'react-icons/fa6'
import { PiWechatLogoLight } from 'react-icons/pi'

const CardPostItems = () => {
    return (
        <>
            <div className="w-full flex flex-col gap-8 p-6 bg-gray-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-[12px]">
                <div className='flex flex-col gap-2'>
                    <h3 className="text-[20px] font-medium">
                        How to use Interface in TypeScript
                    </h3>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quod! Voluptatibus corrupti error aspernatur animi perspiciatis odio quo accusamus repellendus?</p>
                </div>

                <div className="flex items-center justify-between">
                    <div className='flex gap-6'>
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

            <div className="w-full flex flex-col gap-8 p-6 bg-gray-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-[12px]">
                <div className='flex flex-col gap-2'>
                    <h3 className="text-[20px] font-medium">
                        Differences between TypeScript and JavaScript
                    </h3>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, consectetur alias? Reiciendis omnis voluptate vero voluptatum aliquam atque cumque nesciunt totam nihil quia magnam, eum qui similique numquam est?</p>
                </div>

                <div className="flex items-center justify-between">
                    <div className='flex gap-6'>
                        <div className='flex items-center gap-3'>
                            <FaRegUser className='w-4 h-4 text-green-600' />
                            <span className='text-gray-700 tracking-wide'>Doni Kusuma</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <PiWechatLogoLight className='w-6 h-6 text-green-500' />
                            <span>112</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 text-gray-400'>
                        <FaCircle className='w-[6px] h-[6px] text-green-600' />
                        <p>7 hours ago</p>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col gap-8 p-6 bg-gray-100 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-[12px]">
                <div className='flex flex-col gap-2'>
                    <h3 className="text-[20px] font-medium">
                        Its kinda hard to have a big dick
                    </h3>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quod! Voluptatibus corrupti error aspernatur animi perspiciatis odio quo accusamus repellendus?</p>
                </div>

                <div className="flex items-center justify-between">
                    <div className='flex gap-6'>
                        <div className='flex items-center gap-3'>
                            <FaRegUser className='w-4 h-4 text-green-600' />
                            <span className='text-gray-700 tracking-wide'>Arif Bustomi</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <PiWechatLogoLight className='w-6 h-6 text-green-500' />
                            <span>20</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 text-gray-400'>
                        <FaCircle className='w-[6px] h-[6px] text-green-600' />
                        <p>1 day ago</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardPostItems
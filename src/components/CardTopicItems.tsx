import React from 'react'
import { FaCircle } from 'react-icons/fa6'

const CardTopicItems = () => {
    return (
        <>
            <div className='flex gap-2 items-center'>
                <FaCircle className='w-3 h-3' />
                <span>Javascript</span>
            </div>
            <div className='flex gap-2 items-center'>
                <FaCircle className='w-3 h-3' />
                <span>Typescript</span>
            </div>
            <div className='flex gap-2 items-center'>
                <FaCircle className='w-3 h-3' />
                <span>Tailwind CSS</span>
            </div>
            <div className='flex gap-2 items-center'>
                <FaCircle className='w-3 h-3' />
                <span>React Native</span>
            </div>
        </>
    )
}

export default CardTopicItems
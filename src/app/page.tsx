import { Button } from '@nextui-org/react'
import Image from 'next/image'
import { BiHeart } from 'react-icons/bi'
import { BsHeart } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'

export default function Home() {
  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
      <Button color='danger' variant='solid' isIconOnly>
        <BiHeart className='w-6 h-6'/>
      </Button>
    </div>
  )
}

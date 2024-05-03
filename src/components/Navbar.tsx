"use client"

import { signIn, signOut } from '@/actions'
import { Button, Input, Skeleton } from '@nextui-org/react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { IoSettingsOutline } from 'react-icons/io5'
import { PiWechatLogoLight } from 'react-icons/pi'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { FaGithubAlt } from 'react-icons/fa6'
import { AiOutlineLoading } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import MobileNav from './MobileNav'

const Navbar = () => {
    const session = useSession()
    const [isLoading, setIsLoading] = useState(false);

    const handleSignIn = async () => {
        setIsLoading(true);
        await signIn();
    }


    return (
        <nav className='w-full bg-gray-100 border-b-2 fixed top-0 z-20'>
            <div className='wrapper flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <PiWechatLogoLight className='w-12 h-12 text-green-500' />
                    <Link href="/" className='text-[24px] font-semibold tracking-wide'>
                        Kana<span className='text-green-500'>Talk</span>
                    </Link>
                </div>

                <Input
                    placeholder='Type to search..'
                    className='max-w-[350px] lg:block hidden'
                    variant='underlined'
                    color='success'
                    startContent={
                        <BiSearchAlt className='w-6 h-6 text-green-500' />
                    }
                    size='md'
                />

                {session.status === 'loading' ? (
                    <div className='flex max-md:hidden items-center justify-between rounded-[12px] bg-gray-100 border-2 border-gray-300 transition duration-200 px-4 py-2 w-[250px]'>
                        <div className='flex items-center gap-4'>
                            <Skeleton className='p-[2px] border-2 rounded-full'>
                                <Skeleton className='w-[40px] h-[40px] rounded-full' />
                            </Skeleton>

                            <div className='flex flex-col gap-2'>
                                <Skeleton className='font-semibold h-2 w-[100px] rounded-lg' />
                                <form action={signOut}>
                                    <Skeleton className='text-[12px] text-gray-500 font-medium hover:text-gray-400  h-2 w-[100px] rounded-lg' />
                                </form>
                            </div>
                        </div>


                        <button
                            className='focus:border-none focus:outline-none'>
                            <Skeleton className='w-6 h-6 rounded-full' />
                        </button>
                    </div>
                ) : session.data?.user ? (
                    <div className='flex max-md:hidden items-center justify-between rounded-[12px] bg-gray-100 border-2 border-gray-300 hover:border-green-500 transition duration-200 px-4 py-2 gap-10'>
                        <div className='flex items-center gap-4'>
                            <div className='p-[2px] border-2 border-green-500 rounded-full'>
                                <Image src={`${session.data.user.image}`} alt='' width={40} height={40} className='rounded-full' />
                            </div>

                            <div className='flex flex-col'>
                                <span className='font-semibold translate-y-0.5'>{session.data.user.name}</span>
                                <form action={signOut}>
                                    <button className='text-[12px] text-gray-500 font-medium hover:text-gray-400 -translate-y-0.5'>Sign Out</button>
                                </form>
                            </div>
                        </div>

                        <Dropdown>
                            <DropdownTrigger>
                                <button
                                    className='focus:border-none focus:outline-none'>
                                    <IoSettingsOutline className='w-6 h-6 text-green-500' />
                                </button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions">
                                <DropdownItem key="new">New file</DropdownItem>
                                <DropdownItem key="copy">Copy link</DropdownItem>
                                <DropdownItem key="edit">Edit file</DropdownItem>
                                <DropdownItem key="delete" className="text-danger" color="danger">
                                    Delete file
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                ) : (
                    <Button
                        type='submit'
                        className='bg-green-500 md:flex hidden text-gray-50 rounded-full px-8 py-6 border-2 border-green-500 hover:bg-transparent hover:text-green-500 items-center justify-center'
                        onClick={handleSignIn} isDisabled={isLoading}>
                        {isLoading ?
                            <>
                                <AiOutlineLoading className='h-6 w-6 animate-spin' />
                                <span className='font-medium ml-2 text-[18px]'>
                                    Loading...
                                </span>
                            </>
                            :
                            <>
                                <FaGithubAlt className='w-7 h-7' />
                                <span className='font-medium ml-2 text-[18px]'>
                                    Sign In
                                </span>
                            </>
                        }
                    </Button>
                )}

                <MobileNav />
            </div>
        </nav>
    )
}

export default Navbar
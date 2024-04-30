import { signIn, signOut } from '@/actions';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Link, Skeleton } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { AiOutlineLoading } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';
import { FaGithubAlt } from 'react-icons/fa6';
import { IoCloseCircleSharp, IoSettingsOutline } from 'react-icons/io5';
import { PiWechatLogoLight } from 'react-icons/pi';
import { RxHamburgerMenu } from 'react-icons/rx'

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const session = useSession()
    const [isLoading, setIsLoading] = useState(false);

    const handleSignIn = async () => {
        setIsLoading(true);
        await signIn();
    }

    const useEffectScroll = () => {
        useEffect(() => {
            const html = document.documentElement;
            const scrollBlocked = isOpen;

            if (scrollBlocked) {
                html.classList.add('overflow-hidden');
            } else {
                html.classList.remove('overflow-hidden');
            }
        }, [isOpen]);
    };
    useEffectScroll();

    const handleResize = () => {
        if (window.innerWidth > 768) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <button className='flex md:hidden' onClick={() => setIsOpen(true)}>
                <RxHamburgerMenu className='w-5 h-5 text-green-600' />
            </button>

            <nav className={`fixed top-0 left-0 w-full min-h-screen bg-green-500 z-20 ${isOpen ? 'translate-y-0' : '-translate-y-full'} transition-all !duration-300`}>
                <div className='flex items-center flex-col gap-6'>
                    <div className='w-full bg-gray-50 wrapper flex items-center justify-between'>
                        <div className={`flex gap-2 items-center ${isOpen ? 'translate-x-0' : '-translate-x-40'} transition-all !duration-500`}>
                            <PiWechatLogoLight className='w-12 h-12 text-green-500' />
                            <Link href="/" className='text-[24px] font-semibold tracking-wide text-gray-900'>
                                Kana<span className='text-green-500'>Talk</span>
                            </Link>
                        </div>

                        <button onClick={() => setIsOpen(false)} className={`bg-green-500 rounded-full shadow-md ${isOpen ? 'translate-x-0' : 'translate-x-40'} transition-all !duration-500`}>
                            <IoCloseCircleSharp className='w-6 h-6 text-gray-50' />
                        </button>
                    </div>

                    <div className='flex flex-col w-full justify-between h-[500px] wrapper'>
                        <Input
                            placeholder='Type to search..'
                            className={`max-full ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-40 opacity-20'} transition-all !duration-1000`}
                            variant='faded'
                            startContent={
                                <BiSearchAlt className='w-6 h-6 text-green-500' />
                            }
                            size='md'
                        />

                        {session.status === 'loading' ? (
                            <div className='flex items-center justify-between rounded-[12px] bg-gray-100 border-2 border-gray-300 transition duration-200 px-4 py-2 w-full'>
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
                            <div className={`flex items-center justify-between rounded-[12px] bg-gray-100 border-2 border-gray-300 hover:border-green-500 transition duration-200 px-4 py-2 w-full ${isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-20'} transition-all !duration-1000`}>
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
                                className={`bg-gray-50 text-green-500 rounded-full px-8 py-6 border-2 border-gray-50 hover:bg-transparent hover:text-gray-50 flex items-center justify-center ${isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-20'} transition-all !duration-1000`}
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
                    </div>
                </div>
            </nav>
        </>
    )
}

export default MobileNav
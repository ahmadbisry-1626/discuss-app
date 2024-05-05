"use client"

import Search from '@/actions/search'
import { Input } from '@nextui-org/react'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'

const SearchInput = ({ style }: { style: string }) => {
    const searchParams = useSearchParams()

    return (
        <form action={Search}>
            <Input
                name='term'
                defaultValue={searchParams.get('term') || ''}
                placeholder='Type to search..'
                className={`${style}`}
                variant='underlined'
                color='success'
                startContent={
                    <BiSearchAlt className='w-6 h-6 text-green-500' />
                }
                size='md'
            />
        </form>
    )
}

export default SearchInput
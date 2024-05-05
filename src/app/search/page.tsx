import PostList from '@/components/posts/post-list'
import { fetchPostBySearchTerm } from '@/db/queries/posts'
import { redirect } from 'next/navigation'
import React from 'react'

interface SearchPageProps {
    searchParams: {
        term: string
    }
}

const page = async ({ searchParams }: SearchPageProps) => {
    const { term } = searchParams

    if (!term) {
        redirect('/')
    }

    return (
        <div className='min-h-screen flex flex-col gap-6 pt-40 wrapper'>
            <div>
                <h1 className='text-3xl font-bold text-green-500'>
                    Search Result for: {" "} {term}
                </h1>
            </div>

            <PostList fetchData={() => fetchPostBySearchTerm(term)} />
        </div>
    )
}

export default page
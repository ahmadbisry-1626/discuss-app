"use client"

import { useSession } from 'next-auth/react'
import React from 'react'

const Profile = () => {
    const session = useSession()

    if (session.data?.user) {
        return (
            <h1 className='text-[32px]'>From client: user kontol besar</h1>
        )
    }

  return (
    <div className='text-[32px]'>From client: user belum login kontolnya kecik</div>
  )
}

export default Profile
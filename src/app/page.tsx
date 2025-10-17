'use client'
import React from 'react'
import { signIn, signOut } from '@/actions'
import { Button } from '@heroui/react';
import { useSession } from 'next-auth/react';

function HomePage() {
  const { data: session } = useSession();

  return (
    <header>
      {session?.user ?
        <form action={signOut}>
          {JSON.stringify(session.user)}
          <Button type='submit'>signout</Button>
        </form>
        :
        <form action={signIn}>
          <Button type='submit'>signin</Button>
        </form>
      }
    </header>
  )
}

export default HomePage
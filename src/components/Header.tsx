'use client'
import React from 'react'
import { signIn, signOut } from '@/actions'
import { Avatar, Button, Input, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

function Header() {
    const { data: session } = useSession();

    return (
        <Navbar className='shadow mb-6'>
            <NavbarBrand><h1 className='font-extrabold text-2xl'><Link href='/'>Threads App</Link></h1></NavbarBrand>
            <NavbarContent justify='center'>
                <NavbarItem><Input /></NavbarItem>
            </NavbarContent>
            <NavbarContent justify='end'>
                <NavbarItem>
                    {session?.user ?
                        <form className='flex gap-2' action={signOut}>
                            <Avatar src={session.user.image || ''} />
                            <Button type='submit' color='secondary' variant='flat'>Sign Out</Button>
                        </form>
                        :
                        <form action={signIn}>
                            <Button type='submit' color='primary' variant='flat'>Sign In</Button>
                        </form>
                    }
                </NavbarItem>

            </NavbarContent>
        </Navbar>
    )
}

export default Header
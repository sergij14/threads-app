import React from 'react'
import { Input, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@/utils/ui';
import Link from 'next/link';
import HeaderAuth from './HeaderAuth';

function Header() {
    return (
        <Navbar className='shadow mb-6'>
            <NavbarBrand><h1 className='font-extrabold text-2xl'><Link href='/'>Threads App</Link></h1></NavbarBrand>
            <NavbarContent justify='center'>
                <NavbarItem><Input /></NavbarItem>
            </NavbarContent>
            <NavbarContent justify='end'>
                <NavbarItem>
                    <HeaderAuth />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default Header
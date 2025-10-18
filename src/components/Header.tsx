import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@/utils/ui';
import Link from 'next/link';
import HeaderAuth from './HeaderAuth';
import SearchInput from './SearchInput';

function Header() {
    return (
        <Navbar className='shadow mb-6'>
            <NavbarBrand><h1 className='font-extrabold text-2xl'><Link href='/'>Threads App</Link></h1></NavbarBrand>
            <NavbarContent justify='center'>
                <SearchInput />
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
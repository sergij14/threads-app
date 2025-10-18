'use client';
import { search } from '@/actions';
import { Input, NavbarItem } from '@/utils/ui'
import { useSearchParams } from 'next/navigation';

export default function SearchInput() {
    const searchParams = useSearchParams();

    return (
        <NavbarItem>
            <form action={search}>
                <Input name='term' defaultValue={searchParams.get('term') || ''} placeholder='Search' />
            </form>
        </NavbarItem>
    )
}
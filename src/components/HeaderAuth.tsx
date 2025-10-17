'use client'
import { signIn, signOut } from '@/actions';
import { Avatar, Button } from '@/utils/ui';
import { useSession } from 'next-auth/react';

const HeaderAuth = () => {
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return 'Loading...'
    }

    return (
        <>
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
        </>
    )
}

export default HeaderAuth
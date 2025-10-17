import { HeroUIProvider } from '@/utils/ui'
import { SessionProvider } from 'next-auth/react';

function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <HeroUIProvider>
                {children}
            </HeroUIProvider>
        </SessionProvider>
    )
}

export default Providers
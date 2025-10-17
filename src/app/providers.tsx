'use client';
import { HeroUIProvider } from '@heroui/react'
import { SessionProvider } from 'next-auth/react';
import React from 'react'

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
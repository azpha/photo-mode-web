import './globals.css';
import { SessionProvider } from 'next-auth/react';
import type { Metadata } from 'next';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <SessionProvider>
        <Header />
        {children}
        <Footer />
      </SessionProvider>
    </main>
  )
}

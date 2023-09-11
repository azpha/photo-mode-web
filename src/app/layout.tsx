import './globals.css';
import { SessionProvider } from 'next-auth/react';
import type { Metadata } from 'next';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Alex's Photo Mode Shots",
  description: "All (or, well, most) of the shots I've taken in various games",
}

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

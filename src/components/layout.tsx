import React, { JSX } from 'react';
import FooterSection from './footer';
import Header from './header';

interface LayoutProps {
  children : React.ReactNode
}

function Layout({ children } : LayoutProps): JSX.Element {
  return (
    <section className='bg-gradient-to-br from-background to-muted'>
      <Header />
        <main className='min-h-screen container mx-auto px-4 py-8'>
        {children}
        </main>
        <FooterSection />
    </section>
  )
}

export default Layout
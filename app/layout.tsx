import { Urbanist } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs"
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import ThemeContextProvider from '@/providers/theme-provider'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import './globals.css'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Attire Arena',
  description: 'Github - https://github.com/Adi-111',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <ThemeContextProvider>
        <html lang="en">
          <body className={font.className}>
            <ToastProvider />
            <ModalProvider />
            <Navbar />
            {children}
            <Footer />
          </body>
        </html>
      </ThemeContextProvider>
    </ClerkProvider>
  )
}

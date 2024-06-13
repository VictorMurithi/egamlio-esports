"use client";
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Poppins } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css"
import '@/styles/style.scss';
import { useEffect } from 'react';
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])
  return (
    <html lang="en">
      <head>
        <title>Egamlio - Esports and Gaming Courses Website NextJS Template</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
      </head>
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

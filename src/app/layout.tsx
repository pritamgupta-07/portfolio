import './globals.css'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'



export const metadata: Metadata = {
  title: 'Pritam Gupta',
  description: 'Hello, I am Pritam Gupta and I am a Undergrade (BCA) student learing full-stack web developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='max-w-[1340px] m-auto'>
        {/* <div className="w-full h-full"> */}
        <Navbar/>
        {/* <div className="mx-6"> */}
          {children}
          {/* </div> */}
        {/* </div> */}
      </body>
    </html>
  )
}

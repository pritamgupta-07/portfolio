import Link from 'next/link'
 
export default function NotFound() {
    return (
        <div className='text-gray-200 flex flex-col justify-center items-center w-full h-full'>
         <h1>404 | Not Found</h1>
          <p>Could not find requested resource</p>
          <Link href="/" className='text-secondary underline'>Return Home</Link>
        </div>
  )
}
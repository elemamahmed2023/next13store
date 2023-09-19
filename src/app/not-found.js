import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col justify-center text-center
     h-96 text-teal-800 text-3xl  rounded-md p-4
     max-w-xl mx-auto'>
      <h2>Not Found</h2>
      <p>Could not find requested Page ....</p>
      <Link href="/">
        <button className='cursor-pointer text-white bg-slate-800 p-1 mt-6 rounded-md text-[16px] '>Return Home</button>
        </Link>
    </div>
  )
}
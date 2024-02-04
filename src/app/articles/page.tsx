import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <iframe className='mb-44 border-2 border-black' src='/selfconfidence.pdf' width={800} height={1600}></iframe>
        <iframe className='mb-44 border-2 border-black' src='/procrastination.pdf' width={800} height={1600}></iframe>
      </div>
    </main>
  )
}

import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p>I'm quickly listing all my image and information sources because I don't wish to get sued.</p>
      <div className="container flex flex-row justify-evenly mt-20">
        <div className='flex flex-col justify-center items-center'>
          <p className='text-2xl text-amber-800 font-bold mb-4'>Images used</p>
          <a href="https://unsplash.com/de/@brett_jordan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" className="underline text-black-100 hover:text-amber-900">Hand up</a> 
          <a href="https://unsplash.com/de/@brett_jordan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" className="underline text-black-100 hover:text-amber-900">Brett Jordan on Unsplash</a> 
          <a href="https://unsplash.com/de/fotos/braune-holzklotze-auf-weissem-tisch-UiSLNUxH7sM" className="underline text-black-100 hover:text-amber-900">Brett Jordan on Unsplash</a> 
          <a href="https://www.flaticon.com/de/"className="underline text-black-100 hover:text-amber-900">All of the Icons</a>
          <p>Took the selfie myself</p>
          <p>Excel was done by me</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-2xl text-amber-800 font-bold mb-4'>Information from</p>
          <a href="https://www.apa.org/news/podcasts/speaking-of-psychology/procrastinate" className="underline text-black-100 hover:text-amber-900">Why we procrastinate?</a>
          <a href="https://breathemagazine.com.au/mindfulness/excitement-over-fear/" className="underline text-black-100 hover:text-amber-900">Is excitement and fear the same?</a>
          <a href="https://www.goodreads.com/quotes/56225-i-will-take-care-of-me-for-you-if-you" className="underline text-black-100 hover:text-amber-900">Quote</a>
          <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8766341/" className="underline text-black-100 hover:text-amber-900">Study on procrastination by nih</a>
          <a href="https://www.goodreads.com/quotes/159226-the-path-is-the-goal" className="underline text-black-100 hover:text-amber-900">Mahatma Gandhi quote</a>
          <a href="https://www.youtube.com/@HealthyGamerGG" className="underline text-black-100 hover:text-amber-900">Youtuber with los of informations</a>
        </div>
      </div>

    </main>
  )
}

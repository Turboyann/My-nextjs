import Image from 'next/image';
import me from '../Images/Img-6667.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-center items-center p-24">
      <h1 className="text-3xl text-amber-800 font-bold mb-4">That's me</h1>
      <p className='mb-10 max-w-7xl text-gray-600'>As this isn't part of my official project and language that is gonna be corrected, Imma write how I usually would. I'm a eighteen year old aspiring programmer that dreams of becoming rich by learning how to programm I plan to either quickly climb the career ladder or become my own chef later on. I'm really into sports and will visit thailand for a couple of monhts after my military service. I'm planing to train muai thai, that's a form of physical combat, I will be practising like and return as a tank. I take life lightly and plan to travel lots after I create a save back-up plan so that even if I get into a unfavorable predicament I'll have something to save my back. Besides sports I do goof around with friends, listen to audiobooks or spend my time trying out new things. To my prof and any other unfortunate soul that came across this page I wish you a life of joy and satisfaction. Go do something we only get this one chance.</p>
      <Image src={me} alt='/' width={200} className="mb-4"/>
      <p className='mb-10 max-w-7xl text-gray-600 text-xs'>That's me looking fabulous btw</p>
    </main>
  )
}

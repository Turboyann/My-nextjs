import Image from 'next/image'
import brettJordanImage from './Images/brett-jordan.png'


export default function Home() {
  return (
      <main className='flex flex-col items-center justify-between p-8 md:p-24 lg:p-32 bg-white min-h-screen'>
        <ul className='flex flex-col md:flex-row justify-between items-center rounded-md'>
          <li className='relative w-full md:w-1/2 flex flex-col items-center md:items-start'>
            <div className='relative max-w-3xl mx-auto text-center md:text-left'>
              <h2 className='text-amber-800 text-4xl md:text-6xl leading-9 font-semibold mb-4'>Self Confidence and Procrastination</h2>
              <p className='text-gray-600 text-base md:text-lg mb-6'>
                Welcome to your introduction to self-confidence. This page is all about getting a glimpse of human nature. It explores the concept of self-confidence and its link to procrastination. To add to the craziness, there's also a spectacular self-experiment included!
              </p>
              <button className='bg-amber-800 text-white py-2 px-6 rounded-md hover:bg-amber-700 focus:outline-none focus:ring focus:border-amber-800'>
              <a href="./articles">See articles</a>              </button>
            </div>
          </li>
          <li className='mt-8 md:mt-0'>
            <Image src={brettJordanImage} alt='brettJordanImage' width={600} className='rounded-md ml-30' />
          </li>
        </ul>
      </main>
  );
}

import Image from 'next/image';
import React from 'react';
import ContactForm from './contactForm';
import image1 from '../Images/heim.png';
import image2 from '../Images/berufung.png';
import image3 from '../Images/stoppuhr.png';



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-slate-50 mx-20">
    <div className="container my-12 mx-auto md:px-6">
        <div className="max-w-screen-lg mx-auto p-5">
            <div className="grid grid-cols-1 md:grid-cols-12 border bg-white rounded-md overflow-hidden">
                <div className="bg-gray-900 md:col-span-4 p-10 text-white">
                    <p className="mt-4 text-sm leading-7 font-regular uppercase">Contact</p>
                    <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                        Get In <span className="text-amber-800">Touch</span>
                    </h3>
                    <p className="mt-4 leading-7 text-gray-200">
                        If you have any questions write me a message. This alone took me 3 hours to create and the icons aren't even in the same column. but at least the overall design is lit. Also the phone number is invented and not mine, so refrain from calling.
                    </p>

                    <div className="flex items-center mt-5">
                        <Image alt='icon' src={image1} width={40} className="h-6 mr-6 text-amber-800"/>
                        <span className="text-sm">Hofwilstrasse 51, 3053 Münchenbuchsee.</span>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center mt-5">
                        <Image alt='icon' src={image2} width={40} className="h-6 mr-2 amber-800" 
                        />
                        <span className="text-sm">+93 749 99 65 50</span>
                    </div>

                    {/* 24/7 Availability */}
                    <div className="flex items-center mt-5">
                        <Image alt='icon' src={image3} width={40} className="h-6 mr-2 text-amber-800"/>
                        <span className="text-sm">24/7</span>
                    </div>
                </div>
            <ContactForm/>
            </div>
        </div>
    </div>
</main>
);
};

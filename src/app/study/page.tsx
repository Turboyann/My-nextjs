import Image from 'next/image'
import study from '../Images/self-study.png'
import studyimage from '../Images/studypage.png'
import PDFViewer from '../components/PDFViewer';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-8 md:p-24 mx-4">
      <h1 className="text-2xl text-amber-800 font-bold mb-4">Introduction</h1>
      <p className='max-w-4xl mb-20 text-gray-600'>This self-experiment is a documentation of my sincere efforts to overcome procrastination. I experimented with various measures to prevent myself from procrastinating. This document contains my results and my overall reflection of the project. Further down, there's an explanation for each element I tracked throughout the month.</p>
      <ul className="flex flex-col md:flex-row items-center justify-between p-8 md:p-0 mb-12 max-w-screen-2xl">
        <li className="md:w-2/3 mr-16">
          <h1 className="text-4xl text-amber-800 font-bold mb-4">Resistance</h1>
          <p className="text-gray-600 mb-8">The level of resistance represents the intensity of the struggle faced when battling procrastination. A higher resistance level results in a greater need for willpower to accomplish the task.
          </p>
          <h1 className="text-3xl text-amber-800 font-bold mb-4">Time</h1>
          <p className="text-gray-600 mb-8">
            This is self-explanatory and represents the duration during which I committed myself to programming. It serves as a crucial element in the experiment, acting as the control measurement. Without it, determining the success of the experiment would be challenging.
          </p>
          <h1 className="text-3xl text-amber-800 font-bold mb-4">Prevention measure</h1>
          <p className="text-gray-600 mb-8">
            The prevention measure refers to the various approaches I experimented with, in order to beat procrastination. Among them are the control group, the first task in the morning, as well as the rewarding and social pressure strategies.
          </p>
          <h1 className="text-3xl text-amber-800 font-bold mb-4">Goals</h1>
          <p className="text-gray-600 mb-8">
            The goals are quite straightforward and refer to the targets I chose for myself. The goal is also where the complexity lies because the more unrealistic a goal is, the greater the levels of its complexities.
          </p>
        </li>
        <li className="md:mr-8">
          <Image src={study} alt="Study" width={500} className="rounded-lg shadow-md" />
        </li>
      </ul>

      <ul className="flex flex-col md:flex-row items-center justify-between p-8 md:p-0 max-w-screen-2xl mb-12">
        <li className="md:mr-8">
          <Image src={studyimage} width={400} alt="Study" />
        </li>
        <li className="md:w-2/3 ml-16">
          <h1 className="text-3xl text-amber-800 font-bold mb-4">None</h1>
          <p className="text-gray-600 mb-8">
            The prevention measure of none serves as the control group. It enables us to determine the utility of the other prevention measures through comparison.
          </p>
          <h1 className="text-3xl text-amber-800 font-bold mb-4">First Task</h1>
          <p className="text-gray-600 mb-8">
            The prevention measure of tackling the first task is meant to diminish procrastination by completing the most demanding task earliest. It is based on the assumption that humans lose energy throughout the day, making it easier to execute something demanding earlier rather than later.
          </p>
          <h1 className="text-3xl text-amber-800 font-bold mb-4">Reward</h1>
          <p className="text-gray-600 mb-8">
            This prevention measure involves rewarding myself upon the completion of a task. The reward I chose for myself throughout this experiment was chocolate.
          </p>
          <h1 className="text-3xl text-amber-800 font-bold mb-4">Social pressure</h1>
          <p className="text-gray-600 mb-8">
            Social pressure refers to the influence people exerted over me during my work. For instance I had two variations of social pressure during the experiment. The first was other people relying and depending on this definitley worked like a charm for me. The other was my turning in of the project or better said me being judged this aswell was extremly efficient and worthwile.
          </p>
        </li>
      </ul>
      <h1 className='text-3xl text-amber-800 font-bold mb-5'>Journal</h1>
      <p className='text-gray-600 max-w-5xl mb-5'>
        First of all I’d like to provide additional information to reduce misunderstanding. It's essential to note I engaged in three different programming projects during one month, leading to variations in resistance and differences in work time, particularly in the ealier stages. Two of the projects were simple python projects. In which I assisted a friend with ,  meeting a deadline for a python game related to his apprenticeship.
      </p>
      <p className='text-gray-600 max-w-5xl mb-5'>
        After I had helped him, I started working on my website, which in turn lead to the worsening of my procrastination due too the high complexity of it. I spent two weeks to attempting something that proved to be unrealistic. In the third week I began by once again helping my friend out with the programming of a python game, followed by changing my goals to be more realistic, instead of focussing on completing specific outcomes, I simply aimed to just show up. this shift had a positive impact on my resistance, and the programming tasks felt less exhausting.

      </p>
      <p className='text-gray-600 max-w-5xl mb-20'>
         This appraoch went on for the remaining two weeks. Retrospectivley, social pressure and the setting realistic goals were by far the biggest contributers to my fight against procrastination. An interesting observation was that the more consistently I showed up, the easier it became.
      </p>
      <Image src={study} alt='results' height={600}/>
      <p className='text-gray-400 text-xs mt-4 mb-24'>Outcome</p>
      <iframe className='mb-44 border-2 border-black' src='/experiment.pdf' width={600} height={1600}></iframe>
    </main>
  )
}

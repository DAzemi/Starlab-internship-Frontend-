import React from 'react';
import photo3 from '../../assets/photo3.png';
import photo4 from '../../assets/photo4.png';

export default function TopProduct() {
  return (
    <div style={{ background: '#F8F8F8' }} className="relative flex flex-col items-center justify-center h-full">
      <div className="text-center text-black text-4xl sm:text-5xl md:text-6xl font-small font-sans leading-9 m-6 sm:m-8 md:m-12">
        Top Products
      </div>
      <div className="w-72 h-2 bg-blue-500 rounded-full" />

      {/* Blue rounded circle in the top right corner */}
      <div className="z-0 w-96 h-96 hidden md:block bg-blue-500 bg-opacity-60 absolute top-0 right-0 rounded-bl-full" />

      <div className="flex flex-col items-center mt-36 md:flex-row w-full max-w-screen-xl mx-auto">
        <div className="w-full md:w-2/2 text-center md:text-left">
          <div className="text-black text-2xl sm:text-3xl lg:text-4xl font-semibold font-sans leading-10 sm:leading-12">
            Toshiba - 75" Class C350 Series <br></br>LED 4K UHD Smart Fire TV
          </div>
          <div className="text-zinc-500 text-xl sm:text-2xl font-normal font-['Arial'] leading-loose sm:w-2/3 mt-4 sm:mt-8">
            Our Verdict. The Toshiba C350 is a mediocre TV overall. It has a wide viewing angle, making it alright for watching shows or sports in a wide seating area. However, it has low contrast and it's disappointing for watching movies in a dark room.
          </div>
          <div className="w-52 h-16 text-blue-500 text-3xl font-bold font-['Manrope'] leading-loose mt-4">$ 499.00</div>
        </div>
        <div className="w-full md:w-1/2 mt-8 sm:mt-0 relative z-10">
          <img className="w-64 sm:w-96 md:w-96 h-64 sm:h-96 mx-auto" src={photo3} alt="Product" />
        </div>
      </div>

      <div className="flex flex-col items-center mt-48 md:flex-row w-full max-w-screen-xl mx-auto mb-24 relative">
        <div className="w-full md:w-1/2 mt-8 sm:mt-0 relative z-10">
          <img className="w-64 sm:w-96 md:w-96 h-64 sm:h-96 mx-auto" src={photo4} alt="Product" />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="text-black text-2xl sm:text-3xl lg:text-4xl font-semibold font-sans leading-10 sm:leading-12">
            24‑inch iMac with Apple M1 chip.
          </div>
          <div className="text-zinc-500 text-xl sm:text-2xl font-normal font-['Arial'] leading-loose sm:w-3/3 mt-4 sm:mt-8">
            An immersive 24-inch 4.5K Retina display with over a billion colors that gives you the big picture in stunning detail. ¹ The best camera and mics ever in a Mac so you look and sound your best. And roomfilling, six-speaker sound that takes movies and music to the next level.
          </div>
          <div className="w-52 h-16 text-blue-500 text-3xl font-bold font-['Manrope'] leading-loose mt-4">$ 1,299.00</div>
        </div>
      </div>
      <div className="w-96 h-96 overflow-hidden hidden md:block bg-blue-500 bg-opacity-60 absolute bottom-0 left-0 rounded-tr-full z-0" />
    </div>
  );
}

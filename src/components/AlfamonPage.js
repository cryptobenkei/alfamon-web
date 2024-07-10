import React from 'react';

const AlfamosPage = () => {
  return (
    <div className="bg-black text-green-400 min-h-screen p-4 font-['Press_Start_2P']">
      <header className="text-center mb-8 flex flex-col items-center">
          <span className="w-24 h-24 text-black text-2xl font-bold">
            <img className="rounded-full" src="egg.png" alt="logo" />
          </span>
      </header>
      
      <main className="max-w-2xl mx-auto space-y-8">
        <section className="border border-green-400 p-4">
        <h1 className="text-3xl font-bold text-green-400 pixelated">Alfamon</h1>
          <p className="mt-6 text-xs text-green-200">
            Alfamons offers a unique gaming experience on Farcaster. Collect your Alfamons through interactive Farcaster frames.
        </p>
        <p className="mt-4 text-xs text-green-200">
            Engage in daily tasks to improve and strengthen your creatures. Challenge other trainers to exciting battles, showcasing your Alfamons' skills.
        </p>
        <p className="mt-4 text-xs text-green-200">
            As you progress, trade with fellow players to expand your collection, and watch your Alfamons evolve into more powerful forms.
        </p>

        </section>

        <section className="border border-green-400 p-4">
          <h2 className="text-xl font-semibold mb-4 pixelated">Start Playing</h2>
          <ol className="list-decimal list-inside space-y-2 text-xs">
            <li><a href="https://warpcast.com/cryptobenkei" className="underline hover:text-green-200 transition-colors">Follow me in farcaster</a></li>
            <li className='text-green-200'>Limited daily drop of eggs</li>
            <li className='text-green-200'>Get yours before it runs away</li>
            <li className='text-green-200'>Incubate your eggs in a frame</li>
            <li className='text-green-200'>After five incubations, Hatch your egg</li>
          </ol>
        </section>
        
        <section className="border border-green-400 p-4">
          <h2 className="text-xl font-semibold mb-4 pixelated">Connect</h2>
          <div className="flex justify-center text-xs">
            <a href="https://t.me/alfamons" className="underline hover:text-green-200 transition-colors">
              Telegram Channel
            </a>
            &nbsp;-&nbsp;
            <a href="https://warpcast.com/cryptobenkei" className="underline hover:text-green-200 transition-colors">
              Farcaster
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AlfamosPage;
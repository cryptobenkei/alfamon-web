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

        <section className="border border-green-400 p-12">
          <h3 className="text-sm font-semibold mb-4 pixelated text-green-200">Step One</h3>
          <h2 className="text-xl font-semibold mb-4 pixelated">Mint an Egg</h2>
          <p className="mt-4 text-xs text-green-200">
            Mint an egg by casting the Alfamon frame. There are a Limited daily drop of eggs! Get yours before they run out
          </p>
          <a 
              href="https://warpcast.com/~/compose?text=I want to play Alfamon https://frame.ctx.xyz/alfamon"
              className="mt-4 bg-green-400 text-black px-4 py-2 rounded hover:bg-green-300 transition-colors w-full inline-block text-center text-xs"
              target='_blank'
            >
              Mint in Farcaster
            </a>
        </section>
        <section className="border border-green-400 p-12">
          <h3 className="text-sm font-semibold mb-4 pixelated text-green-200">Step Two</h3>
          <h2 className="text-xl font-semibold mb-4 pixelated">Hatch the Egg</h2>
          <p className="mt-4 text-xs text-green-200">
          Your AlfaMon egg appears as an interactive Farcaster frame. Nurture it daily! After 5 missions you can hatch the Egg. You'll get one of the 5 first original Alfamons
          </p>
          <ul className="list-disc list-inside space-y-2 text-xs mt-4 text-green-200">
              <li>Cast your egg frame daily</li>
              <li>Complete Farcaster missions</li>
              <li>Watch your egg evolve</li>
            </ul>
            <p className="mt-4 text-xs text-gray-600">
              Secret code is <span className='text-black'>alfamon</span>. But trainers be aware... The next batch of codes won't be such a cakewalk
            </p>
        </section>
        <section className="border border-green-400 p-4">
          <h2 className="text-xl font-semibold mb-4 pixelated">Play!</h2>
          <p className="mt-4 text-xs text-green-200">
            When the egg has hatched you can cast the frame of your alfamon and play with it, there will be daily missions where you will get Alfamon candies for your alfamon and will allow you to levelUp the combat power. In the future we will add combats, special missions, gyms...
          </p>
          <p className="mt-4 text-xs text-green-200">
            Airdrop? Who said airdrop?
          </p>
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
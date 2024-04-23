import Image from 'next/image';
import clsx from 'clsx';

import background from './background.png';

export default function Home() {
  return (
    <main className='relative min-h-screen'>
      <Image
        src={background}
        quality={100}
        fill
        priority
        alt=''
        className='object-cover object-bottom blur-[5px]'
      />
      <div className='absolute inset-0'>
        <header className='container flex items-center gap-x-5 px-5 py-6 lg:px-0'>
          {/* Social */}
          <div
            className={clsx(
              'mr-auto flex shrink-0 gap-x-3',
              '[&_a]:multi-[`bg-white;border-[3px];border-primary;rounded-xl;px-2;py-2;transition`]',
              'hover:[&_a]:multi-[`bg-primary;border-white;[&_img]:invert-svg`]'
            )}
          >
            <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target='_twitter'>
              <img src='/twitter.svg' alt='' />
            </a>
            <a href={process.env.NEXT_PUBLIC_TELEGRAM_URL} target='_telegram'>
              <img src='/telegram.svg' alt='' />
            </a>
          </div>
          <h1 className='mr-auto font-inter text-lg font-bold uppercase text-primary sm:text-xl lg:text-2xl'>
            CA:{' '}
            <span className='break-all'>
              {process.env.NEXT_PUBLIC_COIN_ADDRESS}
            </span>
          </h1>
        </header>
      </div>
    </main>
  );
}

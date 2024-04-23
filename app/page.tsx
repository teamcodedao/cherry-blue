'use client';

import Image from 'next/image';
import clsx from 'clsx';
import Marquee from 'react-fast-marquee';

import Scale from './scale';

import background from './background.png';
import {useCallback} from 'react';

export default function Home() {
  const footerTextRef = useCallback<(node: unknown) => void>(node => {
    if (node instanceof HTMLElement) {
      (async () => {
        const {TxtAnime} = await import('txtanime.js');
        new TxtAnime(node, {
          effect: 'txt-an-3',
        });
      })();
    }
  }, []);

  const supplyRef = useCallback<(node: unknown) => void>(node => {
    if (node instanceof HTMLElement) {
      (async () => {
        const {TxtAnime} = await import('txtanime.js');
        new TxtAnime(node, {
          effect: 'txt-an-9',
          text: ['100', '350', '400', '420'],
        });
      })();
    }
  }, []);

  return (
    <main className='relative min-h-[1000px] lg:min-h-[1100px]'>
      <Image
        src={background}
        quality={100}
        fill
        priority
        alt=''
        className='object-cover object-bottom blur-[5px]'
      />
      <div className='absolute inset-0 flex flex-col'>
        <div className='absolute bottom-[40%] left-1/2 -translate-x-1/2'>
          <img src='/cherry-3.gif' alt='' className='w-[193px]' />
          <img
            src='/cherry-shadow.svg'
            alt=''
            className='absolute -bottom-10 left-1/2 -translate-x-1/2'
          />
        </div>
        <header className='container flex items-center gap-x-5 px-5 py-6 lg:px-0'>
          {/* Social */}
          <div
            className={clsx(
              'relative z-20 mr-auto flex shrink-0 gap-x-3',
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
        <div className='relative z-10 flex items-center justify-between px-8'>
          <img
            src='/cherry-1.gif'
            alt=''
            className='-ml-10 -mt-20 max-w-[var(--s)] shrink basis-[var(--s)] -scale-x-100 [--s:218px]'
          />
          <div
            className={clsx(
              'flex shrink-0 flex-col gap-y-2 sm:gap-y-5',
              '[&_a]:multi-[`block;bg-primary;border-[1px];border-white;px-5;py-3;rounded-[13px];text-lg;font-medium;transition`]',
              'sm:[&_a]:multi-[`px-7;py-4;text-xl`]',
              'hover:[&_a]:multi-[`bg-white;border-primary;text-primary`]'
            )}
          >
            <a href={process.env.NEXT_PUBLIC_COIN_URL} target='_buy'>
              BUY $CHERRY
            </a>
            <a href='/' target='_buy'>
              LiNK SOCiAl
            </a>
          </div>
        </div>
        <div className='relative'>
          <div className='mt-7 overflow-hidden bg-white py-5 lg:mt-9 lg:py-7'>
            <Marquee autoFill>
              <span className='inline-block px-7 text-2xl font-medium text-primary lg:text-[32px]'>
                $CHERRYB
              </span>
            </Marquee>
          </div>
          <div className='absolute inset-0 z-10 flex items-center justify-center'>
            <img
              src='/cherry-2.gif'
              alt=''
              className='-mt-28 hidden max-w-[250px] sm:block md:max-w-[390px]'
            />
          </div>
        </div>
        <Scale min={0.6}>
          <div className='absolute -left-10 bottom-5 flex origin-left'>
            <img
              src='/cherry-4.gif'
              alt=''
              className='z-10 w-[338px] -scale-x-100 object-contain'
            />
            <div className='relative -ml-20 shrink-0'>
              <img src='/think.svg' alt='' />
              <h3 className='absolute right-10 top-14 text-center text-[32px] font-medium uppercase text-secondary'>
                <p>supply:</p>
                <div>
                  <p className='flex'>
                    <span ref={supplyRef}></span>
                    <span>.000.000</span>
                  </p>
                  <p className='invisible'>420.000.000</p>
                </div>
              </h3>
            </div>
          </div>
        </Scale>
        <div className='mt-auto flex justify-center overflow-hidden md:justify-end'>
          <div className='overflow-hidden px-2 md:pl-0 md:pr-8'>
            <div className='-mb-10 flex justify-end'>
              <img
                src='/cherry-5.gif'
                alt=''
                className='w-[300px] sm:w-[400px] lg:w-[500px]'
              />
            </div>
            <footer
              ref={footerTextRef}
              className={clsx(
                'mb-8 rounded-full border-[3px] border-white bg-secondary px-4 py-3 text-sm text-primary',
                '[&_small]:text-xs',
                'lg:multi-[`text-base;mb-14`]'
              )}
            >
              <span>LP BURNT</span> <small>•</small> <span>No Tax</span>{' '}
              <small>•</small> <span>No Bullshit</span> <small>•</small>{' '}
              <span>Renounced</span> <small>•</small>{' '}
              <span>100% Defi Token</span>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}

import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import localFont from 'next/font/local';
import clsx from 'clsx';

import './globals.css';

const font = localFont({
  src: './planet_comic.otf',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Cherry Ton',
  description: 'Cherry Ton',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsx(font.className, inter.className)}>{children}</body>
    </html>
  );
}

'use client';

import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';
import Header, { navigation } from 'src/components/Header';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { employees, employeeType } from '@/constant/employees';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const scrollIntoFeatures = () => {
    const options: ScrollIntoViewOptions = {
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth',
    };
    document?.getElementById('team')?.scrollIntoView(options);
  };

  return (
    <main className='flex flex-col overflow-y-auto h-full'>
      <Head>
        <title>Hi</title>
      </Head>
      <Header />
      <section className='flex-grow h-[150%] min-h-full'>
        <div className='grid grid-rows-2 gap-1 h-full align-content-end'>
          <div
            className={`bg-[url('../assets/icons/edrLogo.png')] bg-no-repeat bg-center bg-contain`}
          ></div>
          <div className='pt-4 text-white'>
            <div className='flex flex-row items-center justify-center'>
              <h1 className='text-center'>
                Insert Company Logline. Describe us in one sentence.
              </h1>
            </div>
            <div className='mt-4 flex flex-row items-center justify-center'>
              <p className='text-lg leading-6 text-gray-300 text-center'>
                Subdescription for the company. Motivational phrase. A little
                something extra.
              </p>
            </div>
            <div className='mt-4 flex flex-row items-center justify-center'>
              <a
                href={navigation[0].href}
                className='mx-2 rounded-md bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus:bg-yellow-600'
              >
                Explore Properties
              </a>
              <div
                onClick={scrollIntoFeatures}
                className='mx-4 text-sm font-semibold leading-6 text-white hover:text-yellow-500'
              >
                About Us <span aria-hidden='true'>→</span>
              </div>
            </div>
          </div>
        </div>
        {/*<div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>*/}
        {/*  <Logo className='w-16' />*/}
        {/*  <h1 className='mt-4'>Next.js + Tailwind CSS + TypeScript Starter</h1>*/}
        {/*  <p className='mt-2 text-sm text-gray-800'>*/}
        {/*    A starter for Next.js, Tailwind CSS, and TypeScript with Absolute*/}
        {/*    Import, Seo, Link component, pre-configured with Husky{' '}*/}
        {/*  </p>*/}
        {/*  <p className='mt-2 text-sm text-gray-700'>*/}
        {/*    <ArrowLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter'>*/}
        {/*      See the repository*/}
        {/*    </ArrowLink>*/}
        {/*  </p>*/}

        {/*  <ButtonLink className='mt-6' href='/components' variant='light'>*/}
        {/*    See all components*/}
        {/*  </ButtonLink>*/}

        {/*  <UnstyledLink*/}
        {/*    href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftheodorusclarence%2Fts-nextjs-tailwind-starter'*/}
        {/*    className='mt-4'*/}
        {/*  >*/}
        {/*    /!* eslint-disable-next-line @next/next/no-img-element *!/*/}
        {/*    <img*/}
        {/*      width='92'*/}
        {/*      height='32'*/}
        {/*      src='https://vercel.com/button'*/}
        {/*      alt='Deploy with Vercel'*/}
        {/*    />*/}
        {/*  </UnstyledLink>*/}

        {/*  <footer className='absolute bottom-2 text-gray-700'>*/}
        {/*    © {new Date().getFullYear()} By{' '}*/}
        {/*    <UnderlineLink href='https://theodorusclarence.com?ref=tsnextstarter'>*/}
        {/*      Theodorus Clarence*/}
        {/*    </UnderlineLink>*/}
        {/*  </footer>*/}
        {/*</div>*/}
      </section>
      <div className='flex justify-center mb-4' id='team'>
        <h1 className='text-yellow-400 text-center'>Our Team</h1>
      </div>
      <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mx-12 mb-4'>
        {employees.map((employee: employeeType, index: number) => (
          <div
            className='border-yellow-400 border hover:border-yellow-300 bg-gray-900 bg-opacity-70 shadow-lg py-2 flex flex-col items-center justify-center'
            key={index}
          >
            <Image
              src={employee.image}
              className='rounded-full hover:border-yellow-300 hover:border-2'
              alt='EmployeeImage'
              width={200}
              height={200}
            />
            <h3 className='text-white text-center'>{employee.name}</h3>
            <p className='text-lg leading-6 text-gray-300 text-center'>
              {employee.jobTitle}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}

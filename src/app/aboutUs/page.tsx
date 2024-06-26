import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';

import Header from '@/components/Header';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { employees } from '@/constant/employees';

export default function AboutUsPage() {
  return (
    <main className='flex flex-col'>
      <Head>
        <title>About Us</title>
      </Head>
      <Header />
      {/*<div className='mb-4 flex justify-center' id='team'>*/}
      {/*    <h1 className='text-center text-yellow-400'>About Us</h1>*/}
      {/*</div>*/}
      {/*<section className='mx-12 mb-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3'>*/}
      {/*    {employees.map((employee: employeeType, index: number) => (*/}
      {/*        <div*/}
      {/*            className='flex flex-col items-center justify-center border border-yellow-400 bg-gray-900 bg-opacity-70 py-2 shadow-lg hover:border-yellow-300'*/}
      {/*            key={index}*/}
      {/*        >*/}
      {/*            <Image*/}
      {/*                src={employee.image}*/}
      {/*                className='rounded-full hover:border-2 hover:border-yellow-300'*/}
      {/*                alt='EmployeeImage'*/}
      {/*                width={200}*/}
      {/*                height={200}*/}
      {/*            />*/}
      {/*            <h3 className='text-center text-white'>{employee.name}</h3>*/}
      {/*            <p className='text-center text-lg leading-6 text-gray-300'>*/}
      {/*                {employee.jobTitle}*/}
      {/*            </p>*/}
      {/*        </div>*/}
      {/*    ))}*/}
      {/*</section>*/}
      <section className='mx-12 mb-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-yellow-500 hover:text-yellow-400 sm:text-4xl'>
            Our team
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-100'>
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role='list'
          className='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2'
        >
          {employees.map((person) => (
            <li key={person.name}>
              <Image
                className='aspect-[3/2] w-full rounded-2xl object-cover'
                src={person.image}
                width={100}
                height={100}
                alt=''
              />
              <h3 className='mt-6 text-lg font-semibold leading-8 text-gray-900'>
                {person.name}
              </h3>
              <p className='text-base leading-7 text-gray-600'>{person.role}</p>
              <p className='mt-4 text-base leading-7 text-gray-600'>
                {person.bio}
              </p>
              <ul role='list' className='mt-6 flex gap-x-6'>
                <li>
                  <a
                    href={person.xUrl}
                    className='text-gray-400 hover:text-gray-500'
                  >
                    <span className='sr-only'>X</span>
                    <svg
                      className='h-5 w-5'
                      aria-hidden='true'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z' />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href={person.linkedinUrl}
                    className='text-gray-400 hover:text-gray-500'
                  >
                    <span className='sr-only'>LinkedIn</span>
                    <svg
                      className='h-5 w-5'
                      aria-hidden='true'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

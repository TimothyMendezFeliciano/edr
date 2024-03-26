import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { FaInstagram } from 'react-icons/fa';

import Header from '@/components/Header';

import { partners } from '@/constant/partners';

export default function PartnersPage() {
  return (
    <main className='flex flex-col'>
      <Head>
        <title>Partners</title>
      </Head>
      <Header />
      <section className='mx-12 mb-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-yellow-500 hover:text-yellow-400 sm:text-4xl'>
            Our Partners
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-100'>
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role='list'
          className='mx-auto grid max-w-2xl grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-5 xl:col-span-2'
        >
          {partners.map((partner) => (
            <li key={partner.name}>
              <Image
                className='aspect-[3/2] w-full rounded-2xl object-contain object-center'
                src={partner.image}
                width={256}
                height={256}
                alt=''
              />
              <h3 className='mt-6 text-lg font-semibold leading-8 text-yellow-500 hover:text-yellow-400'>
                {partner.name}
              </h3>
              <p className='mt-4 text-base leading-7 text-gray-600'>
                {partner.bio}
              </p>
              <ul role='list' className='mt-6 flex gap-x-6'>
                {partner?.xUrl && (
                  <li>
                    <a
                      href={partner.xUrl}
                      className='text-gray-400 hover:text-gray-500'
                    >
                      <span className='sr-only'>X</span>
                      <BsTwitterX size={32} />
                    </a>
                  </li>
                )}
                {partner?.instagramUrl && (
                  <li>
                    <a
                      href={partner.instagramUrl.url}
                      className='text-gray-400 hover:text-gray-500'
                    >
                      <span className='sr-only'>
                        Instagram Handle {partner.instagramUrl.name}
                      </span>
                      <FaInstagram size={32} />
                    </a>
                  </li>
                )}
                {partner?.website && (
                  <li>
                    <a
                      href={partner.website.url}
                      className='text-gray-400 hover:text-gray-500'
                    >
                      <span className='sr-only'>
                        Instagram Handle {partner.website.name}
                      </span>
                      <CgWebsite size={32} />
                    </a>
                  </li>
                )}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

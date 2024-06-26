'use client';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';

import edrLogo from '../../assets/icons/edrLogo.png';

export const navigation = [
  { name: 'Explore Properties', href: '/properties' },
  { name: 'About Us', href: '/aboutUs' },
  { name: 'Partners', href: '/partners' },
  { name: 'Contact Us', href: '/contactUs' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollIntoFeatures = () => {
    const options: ScrollIntoViewOptions = {
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth',
    };
    document?.getElementById('team')?.scrollIntoView(options);
  };
  return (
    <header className='m-4 rounded-md bg-white'>
      <nav
        className='flex items-start justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <a href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>El Dorado Realty</span>
            <Image className='h-8 w-auto' src={edrLogo} alt='' />
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {/*{navigation.map((item) => (*/}
          {/*    <a*/}
          {/*        key={item.name}*/}
          {/*        href={item.href}*/}
          {/*        className='text-sm font-semibold leading-6 text-gray-900'*/}
          {/*    >*/}
          {/*        {item.name}*/}
          {/*    </a>*/}
          {/*))}*/}
          <a
              href={navigation[0].href}
              className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
          >
            {navigation[0].name}
          </a>
          <a
              href={navigation[1].href}
              className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
          >
            {navigation[1].name}
          </a>
          <a
              href={navigation[3].href}
              className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
          >
            {navigation[3].name}
          </a>
          <a
              href={navigation[2].href}
              className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
          >
            {navigation[2].name}
          </a>
        </div>
      </nav>
      <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10'/>
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>El Dorado Realty</span>
              <Image className='h-8 w-auto' src={edrLogo} alt='' />
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {/*{navigation.map((item) => (*/}
                {/*  <a*/}
                {/*    key={item.name}*/}
                {/*    href={item.href}*/}
                {/*    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'*/}
                {/*  >*/}
                {/*    {item.name}*/}
                {/*  </a>*/}
                {/*))}*/}
                <a
                  href={navigation[0].href}
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  {navigation[0].name}
                </a>
                <div
                  onClick={scrollIntoFeatures}
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  {navigation[1].name}
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

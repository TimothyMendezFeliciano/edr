'use client';
import Image from 'next/image';
import * as React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FaBath } from 'react-icons/fa';
import { IoMdContact } from 'react-icons/io';
import { MdBedroomChild } from 'react-icons/md';

export default function PropertyCard({ cleanResults }) {
  const ref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = useCallback(
    (event: WheelEvent) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }

      const direction = event.deltaY > 0 ? 'down' : 'up';

      setCurrentIndex((prevIndex) => {
        if (direction === 'down') {
          return prevIndex === cleanResults.length - 1 ? 0 : prevIndex + 1;
        } else {
          return prevIndex === 0 ? cleanResults.length - 1 : prevIndex - 1;
        }
      });
    },
    [ref, cleanResults.length]
  );

  useEffect(() => {
    document.addEventListener('wheel', handleScroll);

    return () => {
      document.removeEventListener('wheel', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div ref={ref}>
      <div className='my-2 flex flex-row justify-evenly rounded-md bg-white p-2 lg:max-h-80'>
        <div
          id='PropertyContents'
          className='m-1 basis-1/2 overflow-y-auto rounded-md bg-gray-100 p-2'
        >
          <h4 className='leading-6 text-gray-600'>
            {cleanResults[currentIndex].purpose}
          </h4>
          <h2 className='leading-6'>
            {cleanResults[currentIndex].title.content}
          </h2>
          <div className='flex items-center'>
            <p className='text-lg text-gray-900 sm:text-xl'>
              ${cleanResults[currentIndex].price.content}
            </p>
            {cleanResults[currentIndex].location?.link?.url && (
              <div className='border-1 ml-4 border-gray-300 pl-4'>
                <a
                  href={cleanResults[currentIndex].location.link.url}
                  target='_blank'
                >
                  {cleanResults[currentIndex].location.content}
                </a>
              </div>
            )}
          </div>
          <ul className='m-1 flex list-none flex-row justify-start gap-2'>
            <li className='flex items-center'>
              <FaBath size={24} />:
              {cleanResults[currentIndex].bathrooms.content}
            </li>
            <li className='flex items-center'>
              <MdBedroomChild size={24} />:{' '}
              {cleanResults[currentIndex].rooms.content}
            </li>
            <li className='flex items-center'>
              <IoMdContact size={24} />:{' '}
              {cleanResults[currentIndex].phoneNumber.content}
            </li>
          </ul>
          {cleanResults[currentIndex].description && (
            <div className='mt-4 space-y-6'>
              <span className='max-h-60 overflow-y-auto text-wrap text-base text-gray-500'>
                {cleanResults[currentIndex].description.content}
              </span>
            </div>
          )}
        </div>
        <div className='aspect-h-1 aspect-w-1 m-1 basis-1/2'>
          {cleanResults[currentIndex].mainImage[0] && (
            <Image
              className='h-full w-full object-contain object-center'
              width={100}
              height={100}
              src={`${cleanResults[currentIndex].mainImage[0]}`}
              alt='Property Image'
            />
          )}
        </div>
      </div>
    </div>
  );
}

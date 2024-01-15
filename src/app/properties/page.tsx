import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';

import Header from '@/components/Header';
// import {fetchPagesFromRows} from "@/lib/notion";
// import {cleanNotionResult} from "@/hooks/useCleanNotionResult";

export default async function PropertiesPage() {
  // const {results} = await fetchPagesFromRows()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // const cleanResults = cleanNotionResult(results)

  const cleanResults = [
    {
      images: [],
      mainImage: [],
      location: { content: 'San Juan', link: null },
      bathrooms: { content: '5', link: null },
      phoneNumber: { content: '939-987-6543', link: null },
      purpose: 'Rent',
      price: { content: '800,000', link: null },
      active: false,
      rooms: { content: '4', link: null },
      title: { content: 'Second Property', link: null },
    },
    {
      images: [
        'https://prod-files-secure.s3.us-west-2.amazonaws.com/be262a58-6150-4c9e-a0c5-db78779728fd/5ce3cd4e-6ce3-4ab2-94f8-2e8e60f7100d/Image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240115T203932Z&X-Amz-Expires=3600&X-Amz-Signature=a00a1288721152ae3d3ce0e80f9b718f9fe9441cf74e033a2be95b7ebfed7338&X-Amz-SignedHeaders=host&x-id=GetObject',
        'https://prod-files-secure.s3.us-west-2.amazonaws.com/be262a58-6150-4c9e-a0c5-db78779728fd/eaeaa6bf-48ab-4edb-8648-c24def956470/Image-2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240115T203932Z&X-Amz-Expires=3600&X-Amz-Signature=ba64848bcd6a1a6f15c8f5a87747159b52469f27b278daa1bf094a6a72651fa6&X-Amz-SignedHeaders=host&x-id=GetObject',
      ],
      mainImage: [
        'https://prod-files-secure.s3.us-west-2.amazonaws.com/be262a58-6150-4c9e-a0c5-db78779728fd/67b23205-3af9-4474-be42-b94097c1c489/heroBackground.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240115T203932Z&X-Amz-Expires=3600&X-Amz-Signature=fd73bf9688c0a32dbd98aaed4bb0e419a31245af3954dc492880d1fa871cea6a&X-Amz-SignedHeaders=host&x-id=GetObject',
      ],
      location: {
        content: 'Dorado',
        link: { url: 'https://maps.app.goo.gl/CE5Nzwm5wWaUZyjP6' },
      },
      bathrooms: { content: '4', link: null },
      phoneNumber: { content: '787-123-4547', link: null },
      purpose: 'Sale',
      price: { content: '999', link: null },
      active: true,
      rooms: { content: '7', link: null },
      title: { content: 'First Property', link: null },
      houseSize: { content: '6,600', link: null },
      lotSize: { content: '6,600', link: null },
      builtIn: { content: '2009', link: null },
      hoa: { content: '72', link: null },
      description: {
        content:
          "Welcome to this exquisite gem in the heart of Palmas Del Mar! Built in 2009, this stunning property boasts 6,600 square feet of luxurious living space, offering the epitome of comfort and style. This thoughtfully designed home features 4 spacious bedrooms and 7.5 bathrooms, ensuring ample space for both family and guests. Every inch of this property has been meticulously remodeled, creating a modern and elegant atmosphere throughout. One of the standout features is the 1,600 square foot basement, including an entertainment space and personal full gym. Nestled beside two empty lots, this property offers an abundance of greenery and tranquility, providing a serene escape from the bustle of daily life. You'll relish full privacy in the backyard, where you can enjoy a pristine pool and even challenge friends to a game of pool on your very own table. In addition, the purchase includes plans for another gazebo, for which the drainage has already been completed. Experience breathtaking ocean views that grace this property. With 38 solar panels generating 16.91 kWh of clean energy and 4 Tesla batteries with a combined capacity of 54 kWh, this home is designed for efficiency, making it environmentally conscious and energy-saving. The Palmas Del Mar community offers a vibrant lifestyle, and for a monthly HOA fee of $864, you'll have access to various amenities and services. Additionally, the property tax is just $2,218.28 bi-annually. Don't miss this rare opportunity to own a piece of paradise that combines modern luxury, energy efficiency, and privacy in the idyllic Palmas Del Mar community.",
        link: null,
      },
      features: { content: '', link: null },
    },
  ];

  // console.log('Clean', cleanResults);
  return (
    <main className='flex h-full flex-col overflow-y-auto'>
      <Head>
        <title>Properties</title>
      </Head>
      <Header />
      <div className='mb-4 flex justify-center' id='team'>
        <h1 className='text-center text-yellow-400'>Our Listings</h1>
      </div>
      <section className='m-4 flex-grow border-2 border-red-500'>
        {/*<p className='text-white'>{JSON.stringify(cleanResults)}</p>*/}
        {cleanResults.map((item, index) => (
          <div
            className='my-2 flex justify-evenly rounded-md bg-white p-2 lg:max-h-80'
            key={index}
          >
            <div className='m-1 basis-1/2 overflow-y-auto rounded-md bg-gray-100 p-2'>
              <h4 className='leading-6 text-gray-600'>{item.purpose}</h4>
              <h2 className='leading-6'>{item.title.content}</h2>
              <div className='flex items-center'>
                <p className='text-lg text-gray-900 sm:text-xl'>
                  ${item.price.content}
                </p>
                {item.location?.link?.url && (
                  <div className='border-1 ml-4 border-gray-300 pl-4'>
                    <a href={item.location.link.url} target='_blank'>
                      {item.location.content}
                    </a>
                  </div>
                )}
              </div>
              <div className='mt-4 space-y-6'>
                <ul>
                  <li>Bathrooms: {item.bathrooms.content}</li>
                  <li>Rooms: {item.rooms.content}</li>
                  <li>Contact: {item.phoneNumber.content}</li>
                </ul>
              </div>
              {item.description && (
                <div className='mt-4 space-y-6'>
                  <p className='text-base text-gray-500'>
                    {item.description.content}
                  </p>
                </div>
              )}
            </div>
            <div className='aspect-h-1 aspect-w-1 m-1 basis-1/2'>
              <Image
                className='h-full w-full object-contain object-center'
                width={100}
                height={100}
                src={item.mainImage[0]}
                alt='Property Image'
              />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

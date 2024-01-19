import Head from 'next/head';
import * as React from 'react';

// import {fetchPagesFromRows} from '@/lib/notion';
import Header from '@/components/Header';
import PropertyCard from '@/components/PropertyCard';

export default async function PropertiesPage() {
  // const {results} = await fetchPagesFromRows();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // const cleanResults = cleanNotionResult(results);

  const cleanResults = [
    {
      allImages: [],
      images: [],
      mainImage: [],
      location: { content: '26 Port Rd, Humacao, PR 00791', link: null },
      bathrooms: { content: '5', link: null },
      phoneNumber: { content: '939-987-6543', link: null },
      purpose: 'Rent',
      price: { content: '800,000', link: null },
      active: false,
      rooms: { content: '4', link: null },
      title: { content: 'Second Property', link: null },
      houseSize: { content: '3,200', link: null },
      lotSize: { content: '4000', link: null },
      builtIn: { content: '2010', link: null },
    },
    {
      allImages: [
        'https://prod-files-secure.s3.us-west-2.amazonaws.com/be262a58-6150-4c9e-a0c5-db78779728fd/5ce3cd4e-6ce3-4ab2-94f8-2e8e60f7100d/Image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240119T031642Z&X-Amz-Expires=3600&X-Amz-Signature=27bc76030f05180eec41a0eb22f409837f7c111d7aa03a4884602ace71c8ff23&X-Amz-SignedHeaders=host&x-id=GetObject',
        'https://prod-files-secure.s3.us-west-2.amazonaws.com/be262a58-6150-4c9e-a0c5-db78779728fd/eaeaa6bf-48ab-4edb-8648-c24def956470/Image-2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240119T031642Z&X-Amz-Expires=3600&X-Amz-Signature=9bcfe37e4743f938f89db061cc26b0c2c6763f396deefbe78864edffc691e868&X-Amz-SignedHeaders=host&x-id=GetObject',
        'https://prod-files-secure.s3.us-west-2.amazonaws.com/be262a58-6150-4c9e-a0c5-db78779728fd/67b23205-3af9-4474-be42-b94097c1c489/heroBackground.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240119T031642Z&X-Amz-Expires=3600&X-Amz-Signature=648ed7dd1000817156f4f5f35d27ff4d20c5c25dbc69dcb7b30c9f4c9cfd75cf&X-Amz-SignedHeaders=host&x-id=GetObject',
      ],
      images: [
        'https://prod-files-secure.s3.us-west-2.amazonaws.com/be262a58-6150-4c9e-a0c5-db78779728fd/5ce3cd4e-6ce3-4ab2-94f8-2e8e60f7100d/Image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240119T031642Z&X-Amz-Expires=3600&X-Amz-Signature=27bc76030f05180eec41a0eb22f409837f7c111d7aa03a4884602ace71c8ff23&X-Amz-SignedHeaders=host&x-id=GetObject',
        'https://prod-files-secure.s3.us-west-2.amazonaws.com/be262a58-6150-4c9e-a0c5-db78779728fd/eaeaa6bf-48ab-4edb-8648-c24def956470/Image-2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240119T031642Z&X-Amz-Expires=3600&X-Amz-Signature=9bcfe37e4743f938f89db061cc26b0c2c6763f396deefbe78864edffc691e868&X-Amz-SignedHeaders=host&x-id=GetObject',
      ],
      mainImage: [
        'https://prod-files-secure.s3.us-west-2.amazonaws.com/be262a58-6150-4c9e-a0c5-db78779728fd/67b23205-3af9-4474-be42-b94097c1c489/heroBackground.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240119T031642Z&X-Amz-Expires=3600&X-Amz-Signature=648ed7dd1000817156f4f5f35d27ff4d20c5c25dbc69dcb7b30c9f4c9cfd75cf&X-Amz-SignedHeaders=host&x-id=GetObject',
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
    },
  ];
  return (
    <main className='flex h-full flex-col overflow-y-auto'>
      <Head>
        <title>Properties</title>
      </Head>
      <Header />
      <div className='mb-4 flex justify-center' id='team'>
        <h1 className='text-center text-yellow-400'>Our Listings</h1>
      </div>
      <section className='m-4 flex-grow'>
        <PropertyCard cleanResults={cleanResults} />
      </section>
    </main>
  );
}

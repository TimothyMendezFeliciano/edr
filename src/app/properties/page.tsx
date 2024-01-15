import Head from 'next/head';

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
    },
  ];

  // console.log('Clean', cleanResults);
  return (
    <main className='flex h-full flex-col overflow-y-auto border-2 border-blue-400'>
      <Head>
        <title>Properties</title>
      </Head>
      <Header />
      <section className='m-2 flex-grow border-2 border-red-500'>
        <p className='text-white'>{JSON.stringify(cleanResults)}</p>
      </section>
    </main>
  );
}

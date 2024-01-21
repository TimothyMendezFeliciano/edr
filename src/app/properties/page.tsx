import Head from 'next/head';
import * as React from 'react';

import { fetchPagesFromRows } from '@/lib/notion';
import { cleanNotionResult } from '@/hooks/useCleanNotionResult';

import Header from '@/components/Header';
import PropertyCard from '@/components/PropertyCard';

export default async function PropertiesPage() {
  const { results } = await fetchPagesFromRows();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const cleanResults = cleanNotionResult(results);

  return (
    <main className='flex h-full flex-col overflow-y-auto'>
      <Head>
        <title>Properties</title>
      </Head>
      <Header />
      <div className='mb-4 flex justify-center' id='team'>
        <h1 className='text-center text-yellow-400'>Our Listings</h1>
      </div>
      {/*<p className={'text-white'}>{JSON.stringify(cleanResults)}</p>*/}
      <section className='m-4 flex-grow'>
        <PropertyCard cleanResults={cleanResults} />
      </section>
    </main>
  );
}

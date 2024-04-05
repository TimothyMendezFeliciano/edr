'use client'
import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';
import Header from '@/components/Header';

import {partners} from '@/constant/partners';

import {FaInstagram} from "react-icons/fa";
import {CgWebsite} from "react-icons/cg";
import {MdOutlineMail} from "react-icons/md";
import {BsTelephone} from "react-icons/bs";
import {ToastContainer, toast, Bounce} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function PartnersPage() {
    return (
        <main className='flex flex-col'>
            <Head>
                <title>Partners</title>
            </Head>
            <Header/>
            <section className='mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5'>
                <div className='max-w-2xl xl:col-span-2'>
                    <h2 className='text-3xl font-bold tracking-tight text-yellow-500 hover:text-yellow-400 sm:text-4xl'>
                        Our Partners
                    </h2>
                    <p className='mt-6 text-lg leading-8 text-gray-100'>
                        We know buying a home is a difficult process. So we've paired with some of the best partners in the market.
                        Our partners will help yoiu with everything you need. Whether it be closing contracts, re-modeling your own, or transitioning your business.
                    </p>
                </div>
                <ul
                    role='list'
                    className='-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3'
                >
                    {partners.map((partner) => (
                        <li key={partner.name} className="flex flex-col gap-10 pt-12 sm:flex-row">
                            <Image
                                className='aspect-[4/5] w-52 flex-none rounded-2xl object-contain object-center'
                                src={partner.image}
                                width={256}
                                height={256}
                                alt=''
                            />
                            <div className={'max-w-xl flex-auto'}
                            >
                                <h3 className={'text-lg font-semibold leading-8 tracking-tight text-yellow-500'}>{partner.name}</h3>
                                <p className={'text-base leading-7 text-gray-100'}>{partner.bio}</p>
                                <ul role={'list'}
                                    className={'mt-6 flex gap-x-6'}>
                                    {partner?.instagramUrl && (
                                        <li>
                                            <a
                                                href={partner.instagramUrl.url}
                                                className='text-gray-400 hover:text-gray-500 hover:cursor-pointer'
                                            >
                                                  <span className='sr-only'>
                                                    Instagram Handle {partner.instagramUrl.name}
                                                  </span>
                                                <FaInstagram size={32}/>
                                            </a>
                                        </li>
                                    )}
                                    {partner?.website && (
                                        <li>
                                            <a
                                                href={partner.website.url}
                                                className='text-gray-400 hover:text-gray-500 hover:cursor-pointer'
                                            >
                                                  <span className='sr-only'>
                                                    Instagram Handle {partner.website.name}
                                                  </span>
                                                <CgWebsite size={32}/>
                                            </a>
                                        </li>
                                    )}
                                    {partner?.email && (
                                        <li onClick={async () => {
                                            await navigator.clipboard.writeText(partner.email)
                                            toast.warn('Email Copied to Clipboard', {
                                                position: "top-right",
                                                autoClose: 5000,
                                                hideProgressBar: false,
                                                closeOnClick: true,
                                                pauseOnHover: true,
                                                draggable: true,
                                                progress: undefined,
                                                theme: "light",
                                                transition: Bounce,
                                            });
                                        }}>
                                            <address>
                                                <a
                                                    href={`mailto:${partner.email}`}
                                                    className='text-gray-400 hover:text-gray-500 hover:cursor-pointer'
                                                >
                                                  <span className='sr-only'>
                                                    Email {partner.email}
                                                  </span>
                                                    <MdOutlineMail size={32}/>
                                                </a>
                                            </address>
                                        </li>
                                    )}
                                    {partner?.phoneNumber && (
                                        <li onClick={async () => {
                                            await navigator.clipboard.writeText(partner.phoneNumber)
                                                toast.warn('Phone Number Copied to Clipboard', {
                                                    position: "top-right",
                                                    autoClose: 5000,
                                                    hideProgressBar: false,
                                                    closeOnClick: true,
                                                    pauseOnHover: true,
                                                    draggable: true,
                                                    progress: undefined,
                                                    theme: "light",
                                                    transition: Bounce,
                                                });
                                        }}>
                                            <address>
                                                <a
                                                    href={`tel:${partner.phoneNumber}`}
                                                    className='text-gray-400 hover:text-gray-500 hover:cursor-pointer'
                                                >
                                                  <span className='sr-only'>
                                                    Email {partner.phoneNumber}
                                                  </span>
                                                    <BsTelephone size={32}/>
                                                </a>
                                            </address>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </li>))}
                </ul>
            </section>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </main>
    );
}

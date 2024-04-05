'use client'
import Head from "next/head";
import Header from "@/components/Header";
import React, {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


const schema = yup
    .object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        subject: yup.string().required(),
        message: yup.string().required(),
        email: yup.string().email().required(),
        phoneNumber: yup.string().matches(phoneRegExp, "Phone Number is not valid.")
    })
    .required()

type Inputs = {
    firstName: string,
    lastName: string,
    email: string,
    subject: string,
    phoneNumber: string,
    message: string,
}
export default function ContactUs() {

    const [emailSent, setEmailSent] = useState(false)
    const {register, handleSubmit, watch, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const res = await fetch('api/contact', {
            method: "POST",
            body: JSON.stringify(data)
        })

        setEmailSent(res.status === 200)
    }

    return (
        <main>
            <Head>
                <title>Contact Us</title>
            </Head>
            <Header/>
            <div
                className="isolate bg-[url('../assets/icons/edrLogo.png')] opacity-90 bg-center bg-no-repeat px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl backdrop-blur-md">Contact
                        sales</h2>
                    <p className="mt-2 text-xl leading-8 text-white backdrop-blur-sm">
                        Reach out to us, and we'll gladly help you acquire your next property.
                    </p>
                </div>
                {!emailSent ? <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white backdrop-blur-sm
                             bg-opacity-50">
                                First name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    {...register("firstName", {required: true})}
                                    aria-invalid={errors.firstName ? "true" : "false"}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.firstName?.type === "required" && (
                                    <p role={'alert'} className={'text-red-500'}>First Name is Required</p>
                                )}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white backdrop-blur-sm
                             bg-opacity-50">
                                Last name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    {...register("lastName", {required: true})}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.lastName?.type === "required" && (
                                    <p role={'alert'} className={'text-red-500'}>Last Name is Required</p>
                                )}
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white backdrop-blur-sm
                             bg-opacity-50">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="email"
                                    {...register("email", {required: true})}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.email?.type === "required" && (
                                    <p role={'alert'} className={'text-red-500'}>Email is Required</p>
                                )}
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-white backdrop-blur-sm
                                    bg-opacity-50">
                                Subject
                            </label>
                            <select
                                defaultValue={'Looking for Rental'}
                                {...register("subject", {required: true})}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            >
                                <option value={'Looking for Rental'}>Looking for Rental</option>
                                <option value={'Looking for Investment Opportunities'}>Looking for Investment
                                    Opportunities
                                </option>
                                <option value={'Looking to Buy'}>Looking to Buy</option>
                                <option value={'Looking to Sell'}>Looking to Sell</option>
                                <option value={'General Questions/Other'}>General Questions/Other</option>
                            </select>
                            {errors.subject?.type === "required" && (
                                <p role={'alert'} className={'text-red-500'}>Subject is Required</p>
                            )}
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phoneNumber"
                                   className="block text-sm font-semibold leading-6 text-white backdrop-blur-sm
                                    bg-opacity-50">
                                Phone number
                            </label>
                            <div className="relative mt-2.5">
                                <input
                                    type="tel"
                                    {...register("phoneNumber", {required: true})}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.phoneNumber?.type === "required" && (
                                    <p role={'alert'} className={'text-red-500'}>Phone Number is Required</p>
                                )}
                                {errors.phoneNumber?.type === "matches" && (
                                    <p role={'alert'} className={'text-red-500'}>{errors?.phoneNumber.message}</p>
                                )}
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white backdrop-blur-sm
                             bg-opacity-50">
                                Message
                            </label>
                            <div className="mt-2.5">
              <textarea
                  {...register("message", {required: true})}
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
              />
                                {errors.message?.type === "required" && (
                                    <p role={'alert'} className={'text-red-500'}>Message is Required</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-yellow-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                        >
                            Let's talk
                        </button>
                    </div>
                </form> :
                    <>
                        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8 backdrop-blur-sm">
                            <div className="mx-auto max-w-2xl text-center">
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                    Your message has been sent.
                                    <br/>
                                    We'll be contacting you shortly.
                                </h2>
                                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white">
                                    Thanks for reaching out to us.
                                    Here at El Dorado Realty we strive to bring the best properties to our customers.
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <button
                                        onClick={()=>setEmailSent(false)}
                                        className="rounded-md bg-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                                    >
                                        Send Another
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>}
            </div>
        </main>
    )
}
"use client"

import React from 'react'
// import { experimental_useFormStatus as useFormStatus } from "react-dom";
import toast from 'react-hot-toast';
import Link from 'next/link';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'

import { TextInput } from '@/components';


export default function ContactForm({ handleSubmit }) {
    // const { pending } = useFormStatus();
    const formRef = React.useRef();
    const [pending, setPending] = React.useState(false)
    const [country, setCountry] = React.useState('Nigeria')
    const [region, setRegion] = React.useState('')

    async function handleClientSubmit(formData) {
        setPending(true)
        try {
            const data = await handleSubmit(formData);
            if (data.error) {
                toast.error(data.message)
                formRef.current.reset();
            } else {
                toast.success(data.message)
                formRef.current.reset();
            }
        } catch (error) {
            toast.error(error.message)
        }
        setPending(false)
    }

    return (
        <form ref={formRef} action={handleClientSubmit} className="flex flex-col gap-2 py-10">
            <div className="relative flex flex-col gap-4 max-w-xl pb-5 text-center mx-auto">
                <h3 className="text-sky-500 text-xl sm:text-2xl font-semibold sm:font-bold">Ready for Some <span className="text-dark">Fleen</span>ing Excitement?</h3>
            </div>
            <fieldset disabled={pending} className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
                <TextInput key={9201} name={'firstname'} id={'firstname'} label={'First Name'} placeholder={'Enter First Name'} />
                <TextInput key={9202} name={'lastname'} id={'lastname'} label={'Last Name'} placeholder={'Enter Last Name'} />
                <TextInput key={9203} type={'email'} name={'email'} id={'email'} label={'Email'} minLength={6} placeholder={'yourcoolname@mail.com'} containerClassName={'sm:col-span-2'} />
                <TextInput key={9204} type={'password'} name={'password'} id={'password'} label={'Password'} minLength={6} placeholder={'*********'} />
                <TextInput key={9205} type={'password'} name={'confirm-password'} id={'confirm-password'} label={'Confirm Password'} minLength={6} placeholder={'Re-type your Password'} />
                <div className={`md:col-span-2 flex flex-col gap-1`}>
                    <label htmlFor={'country'} className="text-gray-600 text-sm">{'Country'}</label>
                    <CountryDropdown value={country} id='country' onChange={value => setCountry(value)} name='country' key={9206} classes='outline-none py-2 px-4 border border-gray-300 rounded-md text-gray-600 text-sm bg-transparent focus-within:bg-transparent focus:bg-transparent placeholder-opacity-70' />
                </div>
                <div className={`md:col-span-2 flex flex-col gap-1`}>
                    <label htmlFor={'state'} className="text-gray-600 text-sm">{'State'}</label>
                    <RegionDropdown country={country} disableWhenEmpty={true} value={region} onChange={value => setRegion(value)} name='state' key={9206} id='state' classes='outline-none py-2 px-4 border border-gray-300 rounded-md text-gray-600 text-sm bg-transparent focus-within:bg-transparent focus:bg-transparent placeholder-opacity-70' />
                </div>
            </fieldset>
            <button type="submit" className="rounded-full text-sm mt-2 py-3 px-6 sm:px-10 w-max shadow-md shadow-dark bg-dark text-white cursor-pointer">{pending ? 'Processing...' : 'Create Account'}</button>
            <Link href={'/login'} className="sm:col-span-2 text-center text-base text-slate-400">Have an Account already? <span className="underline">Login</span></Link>
        </form>
    )
}

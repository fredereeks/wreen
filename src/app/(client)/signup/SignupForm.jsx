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
    const [showMemberForm, setShowMemberForm] = React.useState(true)
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
        <section className='flex flex-col gap-4 py-10'>
            <aside className="border-t border-t-slate-300/20 border-b border-b-slate-300/20 p-2 flex items-center justify-center gap-3">
                <button onClick={() => setShowMemberForm(prev => true)} className={`transition-all text-xs rounded-sm py-3 px-2 md:px-4 relative after-overlay ${showMemberForm ? 'after:bg-primary after:hover:bg-sky-600 text-white' : 'text-primary after:bg-slate-200/80 after:bg-slate-200'} after:-skew-x-[10deg]`}> <span className="relative z-20">Register as a Member</span></button>
                <button onClick={() => setShowMemberForm(prev => false)} className={`transition-all text-xs rounded-sm py-3 px-2 md:px-4 relative after-overlay ${showMemberForm ? 'text-primary after:bg-slate-200/80 after:bg-slate-200' : 'text-white after:bg-dark after:hover:bg-darker'} after:-skew-x-[10deg]`}> <span className="relative z-20">Register as a Director</span></button>
            </aside>
            {
                showMemberForm ?
                    <form ref={formRef} action={handleClientSubmit} className="flex flex-col gap-2">
                        <div className="relative flex flex-col gap-4 max-w-xl pb-5 text-center mx-auto">
                            <h3 className="text-sky-500 text-xl sm:text-2xl font-semibold sm:font-bold">Let&apos;s give your <span className="text-dark/80">S<span className="text-primary">cr</span>iPT</span> Exposure</h3>
                        </div>
                        <fieldset disabled={pending} className="flex flex-col sm:grid sm:grid-cols-2 gap-3">
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
                        <Link href={'/login'} className="sm:col-span-2 pt-2 text-center text-base text-slate-400">Have an Account already? <span className="underline">Login</span></Link>
                    </form>
                    :
                    <form ref={formRef} action={handleClientSubmit} className="flex flex-col gap-2">
                        <div className="relative flex flex-col gap-4 max-w-xl pb-5 text-center mx-auto">
                            <h3 className="text-sky-500 text-xl sm:text-2xl font-semibold sm:font-bold">Get Access to Thousands of Proven, Hidden and Raw Talents on <span className="text-dark/80">SiPT</span></h3>
                        </div>
                        <fieldset disabled={pending} className="flex flex-col sm:grid sm:grid-cols-2 gap-3">
                            <TextInput key={7201} name={'firstname'} id={'firstname'} label={'First Name'} placeholder={'Enter First Name'} />
                            <TextInput key={7202} name={'lastname'} id={'lastname'} label={'Last Name'} placeholder={'Enter Last Name'} />
                            <TextInput key={7203} type={'email'} name={'email'} id={'email'} label={'Email'} minLength={6} placeholder={'yourcoolname@mail.com'} containerClassName={'sm:col-span-2'} />
                            <TextInput key={7204} type={'text'} name={'organization'} id={'organization'} label={'Organization'} minLength={6} required={'false'} placeholder={'Enter your Company (if applicable)'} containerClassName={'sm:col-span-2'} />
                            <TextInput key={7205} type={'password'} name={'password'} id={'password'} label={'Password'} minLength={6} placeholder={'*********'} />
                            <TextInput key={7206} type={'password'} name={'confirm-password'} id={'confirm-password'} label={'Confirm Password'} minLength={6} placeholder={'Re-type your Password'} />
                            <div className={`md:col-span-2 flex flex-col gap-1`}>
                                <label htmlFor={'country'} className="text-gray-600 text-sm">{'Country'}</label>
                                <CountryDropdown value={country} id='country' onChange={value => setCountry(value)} name='country' key={7207} classes='outline-none py-2 px-4 border border-gray-300 rounded-md text-gray-600 text-sm bg-transparent focus-within:bg-transparent focus:bg-transparent placeholder-opacity-70' />
                            </div>
                            <div className={`md:col-span-2 flex flex-col gap-1`}>
                                <label htmlFor={'state'} className="text-gray-600 text-sm">{'State'}</label>
                                <RegionDropdown country={country} disableWhenEmpty={true} value={region} onChange={value => setRegion(value)} name='state' key={9208} id='state' classes='outline-none py-2 px-4 border border-gray-300 rounded-md text-gray-600 text-sm bg-transparent focus-within:bg-transparent focus:bg-transparent placeholder-opacity-70' />
                            </div>
                        </fieldset>
                        <button type="submit" className="rounded-full text-sm mt-2 py-3 px-6 sm:px-10 w-max shadow-md shadow-dark bg-dark text-white cursor-pointer">{pending ? 'Processing...' : 'Create Account'}</button>
                        <Link href={'/login'} className="sm:col-span-2 pt-2 text-center text-base text-slate-400">Have an Account already? <span className="underline">Login</span></Link>
                    </form>
            }
        </section>
    )
}

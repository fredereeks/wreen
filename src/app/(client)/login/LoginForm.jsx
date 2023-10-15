"use client"

import React from 'react'
// import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { TextArea, TextInput } from '@/components';
import toast from 'react-hot-toast';
import Link from 'next/link';


export default function ContactForm({ handleSubmit }) {
    // const { pending } = useFormStatus();
    const formRef = React.useRef();
    const [pending, setPending] = React.useState(false)

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
        <form ref={formRef} action={handleClientSubmit} className="flex flex-col gap-2 py-10 max-w-sm md:max-w-md">
            <div className="relative flex flex-col gap-4 max-w-xl pb-5 text-center mx-auto">
                <h3 className="text-sky-500 text-xl sm:text-2xl font-semibold sm:font-bold">Ready for Some <span className="text-dark">Fleen</span>ing Excitement?</h3>
            </div>
            <fieldset disabled={pending} className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
                <TextInput key={8201} name={'username'} id={'username'} label={'Username'} placeholder={'Enter Username'} containerClassName={'col-span-2'} />
                <TextInput key={8202} type={'password'} name={'password'} id={'password'} label={'Password'} minLength={6} placeholder={'*********'} containerClassName={'col-span-2'} />
            </fieldset>
            <button type="submit" className="rounded-full text-xs mt-2 py-2 px-6 sm:px-10 w-max shadow-md shadow-red-500 bg-red-500 text-white cursor-pointer">{pending ? 'Processing...' : 'Login to Continue'}</button>
            <Link href={'/signup'} className="col-span-2 text-center text-base sm:text-lg text-slate-400">New to Fleen? <span className="underline">Signup</span></Link>
        </form>
    )
}

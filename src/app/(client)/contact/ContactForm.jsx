"use client"

import React from 'react'
// import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { TextArea, TextInput } from '@/components';
import toast from 'react-hot-toast';


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
                // formRef.current.reset();
            } else {
                toast.success(data.message)
                // formRef.current.reset();
            }
        } catch (error) {
            toast.error(error.message)
        }
        setPending(false)
    }

    return (
        <form ref={formRef} action={handleClientSubmit} className="bg-white py-8 px-5 sm:py-10 sm:px-6 rounded-md overflow-hidden max-w-lg w-full flex flex-col gap-5">
            <div className="relative flex flex-col max-w-xl pb-5 text-center mx-auto">
                <h3 className="text-sky-500 text-xl sm:text-2xl font-semibold">We are attentive and eager to answer</h3>
                <p className="relative flex flex-wrap gap-3 max-w-md mx-auto font-light text-gray-500 text-sm">Ask us any question you have or Lodge a Complain</p>
            </div>
            <fieldset disabled={pending} className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
                <TextInput key={7201} name="firstname" id="firstname" placeholder="First Name" />
                <TextInput key={7202} name="lastname" id="lastname" placeholder="Last Name" />
                <TextInput key={7203} containerClassName="col-span-2" type="email" name="email" id="email" placeholder="email@mail.com" />
                {/* <TextInput required={false} type="text" name="phone" id="phone" placeholder="+23490xxxxxx" /> */}
                <TextArea key={7204} className="col-span-2" name="message" id="message" placeholder="Ask the question and we shall provide an answer" />
            </fieldset>
            <button type="submit" className="text-gray-50 bg-dark rounded-[2rem] w-max px-6 py-2 text-sm md:text-md shadow-lg cursor-pointer shadow-dark">{pending ? 'Processing...' : 'Send Message'}</button>
        </form>
    )
}

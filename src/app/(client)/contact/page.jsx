import { revalidatePath } from "next/cache";
import Image from 'next/image'
import nodeMailer from 'nodemailer'
import ContactForm from './ContactForm';
// import { prisma } from '@/utils'
import { wreen_coffee_leaf } from "@/assets/images";

const handleSubmit = async (data) => {
    "use server"

    try {
        const firstname = data.get('firstname')?.valueOf();
        const lastname = data.get('lastname')?.valueOf();
        const email = data.get('email')?.valueOf();
        // const phone = data.get('phone')?.valueOf();
        const message = data.get('message')?.valueOf();
        
        // Save to Database
        // const contactMessage = await prisma.contact.create({data: {
        //     firstname, lastname, email, phone: phone || null, message
        // }})
        // console.log({contactMessage})
        // console.log({ firstname, lastname, email, phone, message })
        const html = `
            <section className="flex flex-col">
                <h2 style="color: rgb(51,65,85); text-align: center; font-weight: bold; font-size: 1.125rem; line-height: 1.6rem; border-bottom: 1px solid #eee; margin: .5rem; padding-bottom: .5rem;" className="text-slate-700 text-center">New Message!</h2>
                <div className="flex gap-1">
                    <div className="h-10 w-10 rounded-full bg-indigo-600 flex-shrink-0"></div>
                    <div className="flex flex-col flex-1">
                        <h4 style="color: #848484; font-weight: bold; font-size: 1.125rem; line-height: 1.6rem;" className="font-bold text-slate-600 text-lg">${firstname} ${lastname}</h4>
                        <p style="color: rgb(100,116,139); font-size: 0.75rem; line-height: 1rem;" className="text-xs text-slate-500">Email: ${email}</p>
                    </div>
                    <p style="color: rgb(100,116,139); font-size: 0.875rem; line-height: 1.25rem;" className="text-sm text-slate-700 text-justify">${message}</p>
                </div>
            </section>
        `;
        const transport = nodeMailer.createTransport({
            // host: 'smtp.gmail.com',
            host: process.env.MAIL_HOST,
            port: 465,
            secure: true,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD
            }
        })

        const info = await transport.sendMail({
            // from: `Fleen.com <brunomany1@gmail.com>`,
            from: `Fleen.com <${process.env.MAIL_FROM}>`,
            to: ['Fleen Admin <akawufrancis40@gmail.com>', 'Fleen Admin <anyimgodswill2@gmail.com>'],
            bcc: 'Fleen Admin <adedejifrederickr@gmail.com>',
            replyTo: email,
            subject: 'New Contact Message from Fleen',
            html
        })
        console.log(`Message sent: ${info.messageId}`)
        console.log({info})
        revalidatePath("/contact")
        return { error: false, message: `Thank you for reaching our to us ${firstname} ${lastname}. Expect our reply soonest.`};
    } catch (error) {
        console.log({error})
        return { error: true, message: `Something went wrong. We could not send the mail...Please, try again`};
    }
}

export default function Contact() {
    return (
        <main className="relative">
            {/* <BreadCrumb page={"Contact"} /> */}
            <section className="relative bg-gray-200 py-20 px-5">
                <Image className="object-cover left-0 top-0" alt={"Coffee Cup under a Tree"} src={wreen_coffee_leaf} fill={true} />
                <div className="relative max-w-screen-lg w-full mx-auto flex flex-col md:flex-row md:justify-center md:items-center gap-2 px-4">
                    <ContactForm handleSubmit={handleSubmit} />
                </div>
            </section>
        </main>
    )
}
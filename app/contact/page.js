import Image from 'next/image';

export default function Contact() {
    return (
        <main className='mx-auto max-w-screen-xl px-4'>
            <section className='grid grid-cols-2 gap-x-10 pt-14'>
                <div className='relative overflow-hidden rounded-3xl'>
                    <Image src='/images/contact-background.jpg' alt='Contact Us' width={640} height={1000} />
                    <div className='absolute inset-0 flex flex-col items-center justify-center px-16 text-white'>
                        <h2 className='text-5xl font-semibold capitalize'>
                            Plan your dream vacation effortlessly with our user-friendly booking platform.
                        </h2>
                        <p className='mt-6'>
                            Lorem ipsum dolor sit amet consectetur. Quis faucibus at egestas viverra faucibus. Arcu ac
                            in diam ut nunc magna tristique risus lorem. Tempus amet morbi a enim. Sit leo quisque diam
                            sit elit sociis amet.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <h3 className='text-3xl font-semibold capitalize'>Contact Us</h3>
                    <p className='py-3 text-gray-500'>
                        Lorem ipsum dolor sit amet consectetur. Quis faucibus at egestas viverra faucibus. Arcu ac in
                        diam ut nunc magna tristique risus lorem.
                    </p>
                    <form className='flex flex-col space-y-3'>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor='name'>Name</label>
                            <input
                                type='text'
                                name='name'
                                placeholder='Input your name'
                                className='rounded-md border border-gray-300 px-3 py-2'
                            />
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor='Email'>Email</label>
                            <input
                                type='email'
                                name='Email'
                                placeholder='Input your email'
                                className='rounded-md border border-gray-300 px-3 py-2'
                            />
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor='phone'>Phone Number</label>
                            <input
                                type='number'
                                name='phone'
                                placeholder='Input your phone number'
                                className='rounded-md border border-gray-300 px-3 py-2'
                            />
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor='name'>Address</label>
                            <textarea
                                name='Address'
                                placeholder='Input your address'
                                className='rounded-md border border-gray-300 px-3 py-2'
                            />
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <label htmlFor='message'>Message</label>
                            <textarea
                                name='message'
                                placeholder='Input your message'
                                className='rounded-md border border-gray-300 px-3 py-2'
                            />
                        </div>
                    </form>
                    <button className='mt-8 rounded-md bg-primary py-3 text-sm font-medium text-white'>Send</button>
                </div>
            </section>
        </main>
    );
}

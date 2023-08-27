import ArrowLineIcon from '@/components/icons/ArrowLine';
import Image from 'next/image';

export default function Page() {
    return (
        <main className='mx-auto max-w-screen-xl px-4'>
            <section>
                <div className='relative flex h-[500px] items-center justify-center overflow-hidden rounded-3xl'>
                    <Image src='/images/aboutus-background.jpg' alt='about' width='1320' height='500' />
                </div>
            </section>
            <section className='border-b border-slate-300 pb-28 pt-20'>
                <p className='text-xl font-medium capitalize text-primary'>What You Need to know About Us?</p>
                <div className='mt-8 grid grid-cols-2 place-content-center place-items-center gap-x-2'>
                    <h2 className='text-6xl font-semibold text-primary'>
                        Lorem Travel - Your Trusted Travel Companion in Yogyakarta
                    </h2>
                    <p className='w-5/6 text-lg text-primary'>
                        Welcome to Lorem Travel, your trusted travel companion in Yogyakarta! Located in the heart of
                        this captivating city, we are passionate about creating unforgettable travel experiences for our
                        valued customers.
                    </p>
                </div>
            </section>
            <section className='pt-28'>
                <p className='columns-2 gap-x-10 text-justify text-lg text-primary'>
                    At Lorem Travel, we understand that every journey holds unique meaning and significance. That&apos;s
                    why we strive to curate exceptional tours and travel packages that showcase the best of
                    Yogyakarta&apos;s rich cultural heritage, breathtaking landscapes, and hidden gems. With our
                    extensive local knowledge and expertise, we ensure that every aspect of your travel is carefully
                    crafted to surpass your expectations. <br />
                    <br /> Our team of dedicated professionals is committed to providing personalized attention and
                    impeccable service. From the moment you contact us, our friendly and knowledgeable staff will assist
                    you in planning your dream itinerary, suggesting the most fascinating attractions, and tailoring the
                    experience to your preferences. Whether you&apos;re a solo adventurer, a couple seeking a romantic
                    getaway, or a family looking for an enriching holiday, we have the perfect package for you.
                    <br />
                    <br /> As a responsible tour operator, we prioritize the preservation of our environment and the
                    well-being of the local communities we visit. We collaborate with local partners who share our
                    commitment to sustainable and ethical tourism practices, ensuring that your travel experience not
                    only leaves lasting memories but also positively impacts the destinations you explore.
                    <br />
                    <br /> We invite you to embark on a remarkable journey with Lorem Travel, where every step is guided
                    by our passion for travel and our dedication to delivering exceptional service. Let us be your
                    trusted travel companion, making your visit to Yogyakarta an unforgettable adventure filled with
                    joy, discovery, and cherished moments.
                    <br />
                    <br /> Choose Lorem Travel and experience the wonders of Yogyakarta like never before. Contact us
                    today to begin your extraordinary journey.
                </p>
            </section>
            <section className='pt-36'>
                <div className='grid grid-cols-2 gap-x-10'>
                    <div>
                        <h3 className='mb-7 text-3xl font-semibold text-primary'>Follow Us</h3>
                        <ul className='divide-y divide-slate-300 border-b border-t border-slate-300'>
                            <li className='flex items-center justify-between py-4'>
                                Instagram <ArrowLineIcon />
                            </li>
                            <li className='flex items-center justify-between py-4'>
                                Facebook <ArrowLineIcon />
                            </li>
                            <li className='flex items-center justify-between py-4'>
                                YouTube <ArrowLineIcon />
                            </li>
                            <li className='flex items-center justify-between py-4'>
                                Twitter <ArrowLineIcon />
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='mb-7 text-3xl font-semibold text-primary'>Visit Us</h3>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63245.98371944531!2d110.33364505403115!3d-7.803163419126994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5787bd5b6bc5%3A0x21723fd4d3684f71!2sYogyakarta%2C%20Yogyakarta%20City%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1688596874915!5m2!1sen!2sid'
                            width='600'
                            height='205'
                            loading='lazy'
                            className='rounded-xl'
                            referrerPolicy='no-referrer-when-downgrade'></iframe>
                        <p className='pt-2 text-primary'>38959 Nugraha Mill, Mataram, DI Yogyakarta</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

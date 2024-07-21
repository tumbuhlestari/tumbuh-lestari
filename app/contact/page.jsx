import Image from 'next/image';

import bean from '@/public/bean.svg';
import SocialMedia from '@/components/contact/social-media';
import Contact from '@/components/contact/contact';
import Address from '@/components/contact/address';

export default function Page() {
  return (
    <main className='container mt-16 mb-32 space-y-16'>
      <div className='text-center space-y-4 mx-auto relative max-w-2xl'>
        <h2 className='text-3xl md:text-5xl font-bold'>
          Terhubung dengan kami
        </h2>
        <h2 className='text-white text-4xl md:text-6xl font-bold'>
          Tumbuh Lestari
        </h2>
        <Image
          src={bean}
          alt='Bean'
          height={128}
          width={128}
          className='w-20 rotate-[150deg] absolute -top-20 right-0'
        />
      </div>
      <Contact />
      <SocialMedia />
      <Address />
    </main>
  );
}

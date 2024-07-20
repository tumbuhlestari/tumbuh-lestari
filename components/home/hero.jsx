import Image from 'next/image';
import Link from 'next/link';

import { Button, buttonVariants } from '@/components/ui/button';

import coffee from '@/public/coffee.svg';

export default function Hero() {
  return (
    <div className='grid md:grid-cols-2 gap-8 md:gap-16 w-full container mx-auto py-4'>
      <div className='flex flex-col justify-center items-start space-y-6 md:space-y-12 md:px-4'>
        <div className='flex flex-col gap-4'>
          <h1 className='font-semibold text-4xl md:text-7xl'>
            Tumbuh <span className='text-white'>Lestari</span>
          </h1>
          <p className='text-lg md:text-2xl'>
            <span className='text-white'>Menyulam Keharmonisan</span> Lingkungan
            dan Kenikmatan Rasa
          </p>
        </div>
        <Link
          href='/products'
          className={buttonVariants({ variant: 'default' })}
        >
          Explore
        </Link>
      </div>
      <div className='md:drop-shadow-[0_60px_35px_rgba(0,0,0,0.4)] md:p-8'>
        <Image src={coffee} alt='Coffee' width={512} className='w-full' />
      </div>
      <div className='w-full md:col-span-2 flex justify-center gap-8'>
        <div className='space-y-2 text-center'>
          <h3 className='text-md md:text-lg font-semibold'>Roast Fresh</h3>
          <p className='text-lg md:text-2xl font-semibold'>98% Fresh</p>
        </div>
        <div className='space-y-2 text-center'>
          <h3 className='text-md md:text-lg font-semibold'>Bean Inventory</h3>
          <p className='text-lg md:text-2xl font-semibold'>1,234kg</p>
        </div>
      </div>
    </div>
  );
}

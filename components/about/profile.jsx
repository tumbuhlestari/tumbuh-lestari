import Image from 'next/image';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';

import flower from '@/public/flower.png';

export default function Profile() {
  return (
    <div className='md:min-h-screen w-full md:bg-about-background bg-cover'>
      <div className='container mx-auto grid lg:grid-cols-2 items-center bg-about-background bg-cover md:bg-none pt-32 pb-52 md:py-40'>
        <div className='space-y-8'>
          <div className='space-y-4 lg:max-w-xl'>
            <h1 className='font-semibold text-4xl md:text-7xl'>
              Tumbuh <span className='text-white'>Lestari</span>
            </h1>
            <p className='text-lg md:text-2xl lg:max-w-lg'>
              <span className='text-white'>
                Bergabunglah dengan kami dalam perjalanan ini dan
              </span>{' '}
              rasakan keajaiban setiap cangkir kopi Tumbuh Lestari.
            </p>
          </div>
          <Link
            href='/products'
            className={buttonVariants({ variant: 'default' })}
          >
            Explore
          </Link>
        </div>
      </div>
      <Image
        src={flower}
        alt='Flower'
        height={256}
        width={256}
        className='absolute w-32 md:w-64 top-48 md:top-32 -left-4 opacity-65 -z-50'
      />
    </div>
  );
}

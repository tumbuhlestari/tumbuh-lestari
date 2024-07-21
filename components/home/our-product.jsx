import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';

import ProductCarousel from './product-carousel';
import Image from 'next/image';

import flower from '@/public/flower.png';

async function getProducts() {
  const res = await fetch(`${process.env.API_URL}/products`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
}

export default async function OurProduct() {
  const products = await getProducts();

  return (
    <div className='container mx-auto my-32 space-y-16 relative'>
      <div className='text-center space-y-8 max-w-2xl mx-auto'>
        <h2 className='text-4xl lg:text-5xl font-bold'>
          Penawaran <span className='text-white'>Terbaik Kami</span>
        </h2>
        <p className='text-lg lg:text-2xl text-white font-semibold'>
          Kami menyediakan berbagai macam produk berkualitas yang bisa Anda
          dapatkan dengan harga terbaik.
        </p>
      </div>
      <div className='flex flex-col items-end gap-12'>
        <Link
          href='/product'
          className={buttonVariants({ variant: 'default' })}
        >
          Lihat Semua
        </Link>
        <div>
          <ProductCarousel products={products} />
        </div>
      </div>
      <Image
        src={flower}
        alt='Flower'
        height={256}
        width={256}
        className='absolute w-24 md:w-72 top-16 md:top-40 -left-20 opacity-65 -z-50'
      />
    </div>
  );
}

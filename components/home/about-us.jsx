'use client';

import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const images = [
  { id: 1, src: '/about-us/1.png', alt: '1' },
  { id: 2, src: '/about-us/2.png', alt: '2' },
];

export default function AboutUs() {
  return (
    <div className='grid md:grid-cols-[0.6fr_1fr] mt-8 gap-8 bg-about-us-pattern'>
      <Carousel
        className='w-full'
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.id}>
              <Image
                src={image.src}
                alt={image.alt}
                width={512}
                height={200}
                className='w-full'
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className='py-16 px-8 space-y-12'>
        <h2 className='font-semibold text-2xl md:text-3xl'>
          About <span className='text-white'>Us</span>
        </h2>
        <h3 className='font-bold text-4xl md:text-5xl'>
          <span className='text-white'>Nikmati kopi terbaik </span>dengan cita
          rasa otentik
        </h3>
        <p className='text-white text-xl md:text-2xl text-justify'>
          Sambutlah aroma segar dan kenikmatan yang tiada tara dengan setiap
          tegukan kopi kami. Kopi Tumbuh Lestari menghadirkan lebih dari sekadar
          secangkir kopi, Tapi di balik setiap biji yang dipanggang dengan
          cermat, terdapat cerita tentang cinta pada alam. Dengan setiap tanaman
          yang kami pelihara, kami menghidupkan kembali bumi yang kita cintai.
        </p>
        <div className='grid md:grid-cols-3 gap-16 w-full'>
          <div className='space-y-4'>
            <div className='space-y-2'>
              <p className='text-4xl font-bold'>100%</p>
              <span className='h-1 w-1/2 block not-sr-only bg-foreground'></span>
            </div>
            <p className='text-xl font-medium text-white'>
              Biji kopi asli dipetik oleh petani profesional.
            </p>
          </div>
          <div className='space-y-4'>
            <div className='space-y-2'>
              <p className='text-4xl font-bold'>50+</p>
              <span className='h-1 w-1/2 block not-sr-only bg-foreground'></span>
            </div>
            <p className='text-xl font-medium text-white'>
              Biji kopi asli dipetik oleh petani profesional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

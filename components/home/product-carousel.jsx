'use client';

import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProductCarousel({ products }) {
  return (
    <Carousel
      opts={{ align: 'center' }}
      plugins={[Autoplay({ delay: 5000 })]}
      className='w-full'
    >
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id} className='lg:basis-1/3'>
            <Card className='border-0 bg-transparent'>
              <CardHeader className='space-y-8 flex flex-col justify-center items-center'>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={200}
                  height={200}
                  className='h-52 shadow-md'
                />
                <CardTitle className='font-bold text-2xl lg:text-3xl'>
                  {product.name}
                </CardTitle>
              </CardHeader>
              <CardContent className='text-center'>
                <p className='whitespace-pre-line line-clamp-4 text-white text-lg'>
                  {product.description}
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

'use client';

import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const images = [
  { id: 1, src: '/our-garden/1.png', alt: '1' },
  { id: 2, src: '/our-garden/2.png', alt: '2' },
];

export default function ImageCarousel() {
  return (
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
              className='w-full rounded-lg'
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

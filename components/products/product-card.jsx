import Image from 'next/image';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { buttonVariants } from '../ui/button';

export default function ProductCard({ product }) {
  const idrPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <Card className='border-2 border-foreground hover:shadow-lg flex flex-col justify-between'>
      <CardHeader className='space-y-8'>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={1024}
          height={1024}
          className='w-64 h-64 mx-auto'
        />
        <div className='space-y-4'>
          <CardTitle className='font-bold'>{product.name}</CardTitle>
          <CardDescription className='text-white whitespace-pre-line'>
            {product.description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className='flex justify-between items-center'>
          <p className='text-lg md:text-xl font-semibold'>{idrPrice}</p>
          <Link
            href={product.shopeeUrl}
            target='_blank'
            className={buttonVariants({ variant: 'default' })}
          >
            Pesan Sekarang
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

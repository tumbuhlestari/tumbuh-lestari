import Image from 'next/image';

import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { buttonVariants } from '@/components/ui/button';

export default function ContactCard({
  name,
  description,
  image,
  link,
  linkName = 'Kunjungi',
}) {
  return (
    <Card className='border-2 border-foreground hover:shadow-lg flex flex-col justify-between items-center'>
      <CardHeader className='space-y-8 text-center'>
        <div className='p-2 bg-foreground rounded-full w-48 h-48 self-center flex justify-center items-center'>
          <Image
            src={image}
            alt={name}
            width={1024}
            height={1024}
            className='w-24 h-24 mx-auto'
          />
        </div>
        <div className='space-y-4'>
          <CardTitle className='font-bold text-2xl'>{name}</CardTitle>
          <CardDescription className='text-white whitespace-pre-line text-lg'>
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className='flex justify-between items-center'>
          <Link
            href={link}
            target='_blank'
            className={buttonVariants({ variant: 'default' })}
          >
            {linkName}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

import Link from 'next/link';
import Image from 'next/image';

import { links } from './header/links';

import Instagram from '@/public/icons/instagram.svg';
import Facebook from '@/public/icons/facebook.svg';

import wave from '@/public/wave.svg';

export default function Footer() {
  return (
    <>
      <Image
        src={wave}
        alt='wave'
        height={512}
        width={512}
        className='w-full -mt-36'
      />
      <footer className='bg-foreground text-white'>
        <div className='mx-auto container  grid grid-cols-2 md:grid-cols-[1fr_1fr_1fr_1.2fr] gap-4 md:gap-8 p-8 '>
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold'>Quick</h3>
            <div className='flex flex-col gap-2'>
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.path}
                  className='hover:font-semibold'
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold'>Connect with</h3>
            <div className='flex flex-col gap-2'>
              <Link
                href='mailto:tumbuhlestari01@gmail.com'
                className='hover:font-semibold truncate'
              >
                tumbuhlestaritalks@gmail.com
              </Link>
              <Link href='tel:+6280981823808' className='hover:font-semibold'>
                +62 838 3203 3996
              </Link>
            </div>
          </div>
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold'>Kerja Sama</h3>
            <div className='flex flex-col gap-2'>
              <p>Gudang Madala Haji</p>
              <p>Petani Milenial Sukarame</p>
            </div>
          </div>
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold'>Subscribe now</h3>
            <div className='flex gap-2'>
              <Link href='#'>
                <Image src={Instagram} alt='Instagram' width={24} height={24} />
              </Link>
              <Link href='#'>
                <Image src={Facebook} alt='Facebook' width={24} height={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className='text-center py-4 font-semibold bg-background text-foreground'>
          <p>Copyright © 2024 Tumbuh Lestari</p>
        </div>
      </footer>
    </>
  );
}

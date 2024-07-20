'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { cn } from '@/lib/utils';

import Logo from '@/public/logo.svg';

import { links } from './links';

export default function MobileNavigation() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className='shrink-0 md:hidden border-foreground'
        >
          <Menu className='h-5 w-5' />
          <span className='sr-only'>Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='right'>
        <nav className='grid gap-6 text-lg font-medium'>
          <Image src={Logo} alt='Tumbuh Lestari' width={192} />
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.path}
              className={cn(
                'text-white hover:text-foreground',
                pathname === link.path && 'text-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

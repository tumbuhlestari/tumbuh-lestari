'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { links } from './links';
import { cn } from '@/lib/utils';

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.path}
          className={cn(
            'text-white transition-colors hover:text-foreground',
            pathname === link.path &&
              'text-foreground border-b-2 border-foreground'
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

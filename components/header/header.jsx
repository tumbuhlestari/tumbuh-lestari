import Image from 'next/image';

import Logo from '@/public/logo.svg';

import NavLinks from './navlinks';
import MobileNavigation from './mobile';

export default function Header() {
  return (
    <header className='sticky container top-0 flex h-20 items-center justify-between gap-4 bg-background px-4 md:px-6'>
      <div>
        <Image src={Logo} alt='Tumbuh Lestari' width={192} />
      </div>
      <NavLinks />
      <MobileNavigation />
    </header>
  );
}

import Image from 'next/image';

import Logo from '@/public/logo.svg';

import NavLinks from './navlinks';
import MobileNavigation from './mobile';

export default function Header() {
  return (
    <header className='sticky z-50 top-0 bg-background'>
      <div className='container flex h-20 items-center justify-between gap-4 px-4 md:px-6'>
        <div>
          <Image src={Logo} alt='Tumbuh Lestari' width={192} />
        </div>
        <NavLinks />
        <MobileNavigation />
      </div>
    </header>
  );
}

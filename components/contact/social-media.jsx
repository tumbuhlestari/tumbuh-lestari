import ContactCard from './contact-card';

import instagramColored from '@/public/icons/instagram-colored.svg';
import tokopedia from '@/public/icons/tokopedia.svg';
import shopee from '@/public/icons/shopee.svg';

export default function SocialMedia() {
  return (
    <div className='space-y-4'>
      <h3 className='font-semibold text-2xl md:text-4xl'>Social Media</h3>
      <div className='grid md:grid-cols-3 gap-8'>
        <ContactCard
          name={'@tumbuhlestarikopi'}
          description={'Official instagram Tumbuh Lestari'}
          image={instagramColored}
          link={'https://instagram.com/tumbuhlestarikopi'}
        />
        <ContactCard
          name={'Tumbuh Lestari Kopi'}
          description={'Official Tokopedia Tumbuh Lestari'}
          image={tokopedia}
          link={'https://tokopedia.link/ELF3yj8ukIb'}
        />
        <ContactCard
          name={'Tumbuh Lestari Kopi'}
          description={'Official Shopee Tumbuh Lestari'}
          image={shopee}
          link={'https://shp.ee/0f07u9s'}
        />
      </div>
    </div>
  );
}

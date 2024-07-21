import ContactCard from './contact-card';

import mail from '@/public/icons/mail.png';
import phone from '@/public/icons/phone.png';

export default function Contact() {
  return (
    <div className='space-y-4'>
      <h3 className='font-semibold text-2xl md:text-4xl'>Email dan Telepon</h3>
      <div className='grid md:grid-cols-2 gap-8'>
        <ContactCard
          name={'tumbuhlestaritalks@gmail.com'}
          description={'Alamat email Tumbuh Lestari'}
          image={mail}
          link={'mailto:tumbuhlestaritalks@gmail.com'}
          linkName='Kirim Email'
        />
        <ContactCard
          name={'+62 838 3203 3996'}
          description={'Nomor telepon Tumbuh Lestari'}
          image={phone}
          link={'tel:+6283832033996'}
          linkName='Hubungi Kami'
        />
      </div>
    </div>
  );
}

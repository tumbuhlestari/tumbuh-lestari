import Image from 'next/image';

import tumbuhLestariImage from '@/public/tumbuh-lestari.png';

export default function History() {
  return (
    <div className='container grid md:grid-cols-[0.7fr_1fr] items-center my-16'>
      <Image
        src={tumbuhLestariImage}
        alt='Tumbuh Lestari'
        height={512}
        width={512}
        className='w-full'
      />
      <div className='bg-about-us-pattern bg-cover bg-repeat py-32 md:py-64'>
        <h2 className='text-3xl md:text-5xl font-bold text-center md:text-start'>
          Sejarah <span className='text-white'>Perusahaan</span>
        </h2>
        <span className='block w-32 h-2 rounded-full bg-primary mt-4 mb-8 mx-auto md:ml-4' />
        <p className='text-white text-lg md:text-xl md:max-w-2xl'>
          Lorem ipsum dolor sit amet consectetur. A gravida aenean nulla
          interdum duis. Purus ac sapien ornare vestibulum magna. Facilisi amet
          sed cursus interdum pellentesque purus praesent eros. Quisque
          hendrerit non volutpat cursus eget vel scelerisque ullamcorper.
        </p>
      </div>
    </div>
  );
}

import Image from 'next/image';

import coffeeBeans from '@/public/coffee-beans.png';

export default function Process() {
  const process = [
    {
      title: 'Panen',
      description:
        'Proses kopi dimulai dengan panen, di mana buah kopi dipetik secara selektif',
    },
    {
      title: 'Roasting',
      description:
        'Biji kopi mentah dipanggang pada suhu tinggi untuk mengembangkan rasa dan aroma.',
    },
    {
      title: 'Packaging',
      description:
        'Bubuk atau biji kopi yang sudah dipanggang dikemas dalam kemasan yang sesuai untuk menjaga kesegarannya.',
    },
  ];

  return (
    <div className='container mx-auto my-32 relative'>
      <div className='bg-[#C39A72] grid md:grid-cols-2 gap-8 md:gap-0 py-16 md:py-8 px-16 md:mx-16 rounded-2xl shadow-lg'>
        <div className='pr-8 order-2 md:order-1'>
          <ol className='list-decimal list-inside space-y-8 md:space-y-12'>
            {process.map((item) => (
              <li key={item.title} className='my-4 text-2xl font-bold'>
                {item.title}
                <p className='text-lg font-medium text-white mt-2'>
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <div className='md:border-l-2 md:border-foreground flex flex-col gap-6 md:justify-center md:pl-8 md:text-right relative order-1 md:order-2'>
          <h2 className='text-3xl md:text-4xl font-bold'>
            <span className='text-white'>Proses</span> Pengerjaan
          </h2>
          <p className='text-white text-lg md:text-xl'>
            Proses kopi dari panen hingga pengemasan,{' '}
            <span className='text-foreground'>
              biji kopi berkualitas tinggi{' '}
            </span>
            siap untuk dijual dan dinikmati oleh konsumen.
          </p>
          <Image
            src={coffeeBeans}
            alt='Coffee Beans'
            width={256}
            height={256}
            className='absolute -top-36 right-8 z-10 hidden md:block'
          />
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='bg-[#C39A72] w-4/5 h-64 rounded-2xl shadow-lg absolute -bottom-8 -z-10'></div>
      </div>
    </div>
  );
}

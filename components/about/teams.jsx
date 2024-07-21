import Image from 'next/image';

const teams = [
  {
    name: 'Afrizal Ahmad Rasyidin',
    role: 'Head & Quality Control',
    image: '/teams/afrizal.png',
  },
  {
    name: 'Fridka Ramadhan Sundara',
    role: 'Social Media Manager',
    image: '/teams/fridka.png',
  },
  {
    name: 'Adi Setiadi',
    role: 'Field Management',
    image: '/teams/adi.png',
  },
];

export default function Teams() {
  return (
    <div className='container my-32 py-16 mx-auto space-y-24'>
      <h2 className='text-3xl md:text-5xl font-bold text-center'>
        <span className='text-white'>Kebersamaan dalam</span> Keberhasilan
      </h2>
      <div className='grid md:grid-cols-3 justify-center items-center gap-x-6 gap-y-12 relative'>
        {teams.map((team) => (
          <div key={team.name} className='flex flex-col items-center gap-8'>
            <Image
              src={team.image}
              alt={team.name}
              width={256}
              height={256}
              className='w-52 object-cover rounded-full'
            />
            <div className='space-y-2'>
              <h3 className='text-2xl md:text-3xl font-semibold text-white text-center'>
                {team.name}
              </h3>
              <p className='text-center text-lg md:text-2xl font-semibold'>
                {team.role}
              </p>
            </div>
          </div>
        ))}
        <Image
          src='/bean.svg'
          alt='bean'
          height={128}
          width={128}
          className='absolute bottom-8 md:bottom-20 -left-4 w-32'
        />
        <Image
          src='/bean.svg'
          alt='bean'
          height={128}
          width={128}
          className='absolute -top-16 right-12 w-24 rotate-180'
        />
      </div>
    </div>
  );
}

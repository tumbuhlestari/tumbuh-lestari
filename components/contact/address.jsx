export default function Address() {
  return (
    <div className='space-y-4'>
      <h3 className='font-semibold text-2xl md:text-4xl'>Alamat</h3>
      <div className='grid md:grid-cols-[0.7fr_1fr] gap-8'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5198845854425!2d107.6366066!3d-6.9478336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e962dfca0203%3A0xf646cfb7ce2e7c75!2sTumbuh%20Lestari%20kopi!5e0!3m2!1sen!2sid!4v1721589469781!5m2!1sen!2sid'
          width='600'
          height='450'
          style={{ border: 0 }}
          allowfullscreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'
          className='rounded-xl w-full'
        />
        <div className='space-y-8'>
          <h4 className='text-xl md:text-3xl font-bold'>Tumbuh Lestari Kopi</h4>
          <p className='text-lg md:text-xl'>
            Jl. Sekelimus VII No.5, RT.002/RW.006, Batununggal, Kec. Bandung
            Kidul, Kota Bandung, Jawa Barat 40266
          </p>
        </div>
      </div>
    </div>
  );
}

import ImageCarousel from './image-carousel';

export default function OurGarden() {
  return (
    <div className='container my-16 py-16 mx-auto space-y-8'>
      <div className='space-y-4 max-w-4xl text-center mx-auto'>
        <h2 className='text-3xl md:text-5xl font-bold'>
          Kebun <span className='text-white'>Kami</span>
        </h2>
        <p className='text-lg md:text-2xl text-white'>
          Segar dan Alami, Langsung Dari Kebun Kami
        </p>
      </div>
      <ImageCarousel />
    </div>
  );
}

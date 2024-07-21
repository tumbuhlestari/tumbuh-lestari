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
        <p className='text-white text-lg md:text-xl md:max-w-2xl whitespace-pre-line'>
          Tumbuh Lestari dimulai sebagai Kedai Dialog Kopi pada tahun 2018,
          fokus di F&B di Cibodas. Kami kemudian berpindah lokasi dan berganti
          nama menjadi Halawa Kopi hingga awal 2020. Pandemi menyebabkan usaha
          kami tutup sementara.
          <br />
          <br />
          Dengan memanfaatkan koneksi dan keterampilan dari Halawa Kopi, kami
          memulai Tumbuh Lestari, mengolah kopi dari kebun di Sukarame. Kami
          bekerja sama dengan petani, gudang kopi di Cibodas, dan mulai menanam
          biji kopi di Curug Roda.
          <br />
          <br />
          Setahun kemudian, kami berhasil mengelola panen pertama kami, dari
          penanaman hingga penjualan. Kami juga sempat menjual kopi susu
          kemasan, namun keterbatasan hasil panen menghentikan usaha ini. Kami
          kembali bekerja sama dengan petani dan gudang di Cibodas untuk
          memastikan pasokan kopi.
          <br />
          <br />
          Penjualan kami berkembang dari mulut ke mulut dan sistem pre-order,
          hingga akhir 2022 kami mulai menggarap marketplace online. Fokus kami
          pada produk kopi bubuk dan biji kopi sangrai, dengan empat varian
          produk, salah satunya Premium House Blend Classic Arabica yang
          diproses semi-wash dan tersedia dalam 100g dan 250g.
          <br />
          <br />
          Selain penjualan, kami aktif di media sosial, berbagi cerita tentang
          kegiatan di kebun, proses produksi, dan aktivitas lain seputar kopi.
        </p>
      </div>
    </div>
  );
}

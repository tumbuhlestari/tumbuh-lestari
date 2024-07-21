import Hero from '@/components/home/hero';
import AboutUs from '@/components/home/about-us';
import Process from '@/components/home/process';
import OurProduct from '@/components/home/our-product';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Process />
      <OurProduct />
    </main>
  );
}

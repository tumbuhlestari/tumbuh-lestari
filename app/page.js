import Hero from '@/components/home/hero';
import AboutUs from '@/components/home/about-us';
import Footer from '@/components/footer';
import Process from '@/components/home/process';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Process />

      <Footer />
    </main>
  );
}

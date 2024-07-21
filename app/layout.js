import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

import Header from '@/components/header/header';
import Footer from '@/components/footer';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Tumbuh Lestari',
  description: 'Menyulam Keharmonisan Lingkungan dan Kenikmatan Rasa',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={plusJakartaSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

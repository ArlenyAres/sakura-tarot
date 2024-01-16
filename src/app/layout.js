import Head from 'next/head';
import { Overlock } from 'next/font/google';
import './globals.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const overlockFont = Overlock({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'MYSTIKA Sakura Tarot',
  description: 'Lecturas virtuales de tu pasado, presente y futuro',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
       <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Header />
        <>{children}</>
        <Footer />
      </body>
    </html>
  );
}



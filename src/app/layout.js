import Head from 'next/head';
import { Inter } from "next/font/google";
import '@fortawesome/fontawesome-svg-core/styles.css';
import "./globals.css";
import Header from './components/header/header';
import Footer from './components/footer/footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MYSTIKA Sakura Tarot",
  description: "Lecturas virtuales de tu pasado, presente y futuro",
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

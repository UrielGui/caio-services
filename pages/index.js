import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Description from '../components/Description';
import Feature from '../components/Feature';
import Pricing from '../components/Pricing';
import Pricing2 from '../components/Pricing-2';
import Faq from '../components/Faq';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('head.title')}</title>
        <meta name='description' content={t('head.description')} />
        <link rel='icon' href='img/favicon.ico' />
      </Head>
      <Header />
      <HeroSection />
      <Description />
      <Feature />
      <Pricing />
      <Pricing2 />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

import Head from 'next/head';
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
  return (
    <>
      <Head>
        <title>Caio Services - IPTV Sem Quedas e Sem Travamentos</title>
        <meta name='description' content='IPTV e P2P com qualidade superior, venha conhecer as nossas ofertas.' />
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

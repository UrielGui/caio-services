import { useTranslation } from 'react-i18next';
import Card from './card';

export default function Description() {
  const { t } = useTranslation();
  return (
    <section id='description' className='py-8 text-xl'>
      <div className='text-center flex flex-col items-center py-6'>
        <h1 className='text-3xl'>{t('description.title')}</h1>
        <p className='w-2/4 mt-3'>{t('description.description')}</p>
      </div>
      <div className='flex justify-center overflow-hidden relative'>
        <div className='w-full flex w-max items-center space-x-16 animate-slide'>
          <Card background="bg-[url('/img/carroussel/card-1.png')]" />
          <Card background="bg-[url('/img/carroussel/card-2.png')]" />
          <Card background="bg-[url('/img/carroussel/card-3.png')]" />
          <Card background="bg-[url('/img/carroussel/card-4.png')]" />
          <Card background="bg-[url('/img/carroussel/card-5.png')]" />
          <Card background="bg-[url('/img/carroussel/card-6.png')]" />
          <Card background="bg-[url('/img/carroussel/card-7.png')]" />
          <Card background="bg-[url('/img/carroussel/card-8.png')]" />
          <Card background="bg-[url('/img/carroussel/card-9.png')]" />
          <Card background="bg-[url('/img/carroussel/card-10.png')]" />
          <Card background="bg-[url('/img/carroussel/card-11.png')]" />
          <Card background="bg-[url('/img/carroussel/card-12.png')]" />
        </div>
      </div>
    </section>
  );
}

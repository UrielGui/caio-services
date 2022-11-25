import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function HowItWorks() {
  const { t } = useTranslation();
  return (
    <section className='py-12'>
      <div className='default-container'>
        <div className='w-11/12'>
          <h1 className='text-3xl'>{t('how-it-works.title')}</h1>
          <p className='mt-6'>{t('how-it-works.description-1')}</p>
          <p className='mt-6'>{t('how-it-works.description-2')}</p>
          <p className='mt-6'>{t('how-it-works.description-3')}</p>
        </div>
        <div className='w-full flex justify-center mt-4 space-x-32'>
          <div className='w-1/5 flex flex-col items-center'>
            <Image
              src='/img/step-by-step/step-1.png'
              alt={t('how-it-works.step-by-step-img-alt-1')}
              width={200}
              height={100}
            />
            <p className='mt-2'>{t('how-it-works.step-by-step-1')}</p>
          </div>
          <div className='w-1/5 flex flex-col items-center'>
            <Image
              src='/img/step-by-step/step-2.png'
              alt={t('how-it-works.step-by-step-img-alt-2')}
              width={200}
              height={100}
            />
            <p className='mt-2'>{t('how-it-works.step-by-step-2')}</p>
          </div>
          <div className='w-1/5 flex flex-col items-center'>
            <Image
              src='/img/step-by-step/step-3.png'
              alt={t('how-it-works.step-by-step-img-alt-3')}
              width={200}
              height={100}
            />
            <p className='mt-2'>{t('how-it-works.step-by-step-3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className='bg-hero-section-background bg-no-repeat bg-center bg-cover py-20'>
      <div className='py-14 px-36 text-3xl w-2/5 text-center'>
        <h1 className='text-4xl'>{t('hero-section.title')}</h1>
        <h3 className='mt-2'>{t('hero-section.subtitle')}</h3>
        <div className='mt-12'>
          <button type='button' className='bg-defaultBlue rounded-md py-3.5 px-16'>
            {t('hero-section.button')}
          </button>
          <br />
          <small className='block mt-3 text-xs px-8'>{t('hero-section.warning')}</small>
        </div>
      </div>
    </section>
  );
}

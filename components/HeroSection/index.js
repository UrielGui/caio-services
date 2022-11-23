import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className='bg-hero-section-background bg-no-repeat bg-center bg-cover'>
      <div className='default-container h-96'>
        <div className='py-24 px-12'>
          <h1>{t('hero-section.title')}</h1>
          <h3>{t('hero-section.subtitle')}</h3>
          <div className=''>
            <button type='button' className='bg-defaultBlue rounded-md py-1.5 px-5'>
              {t('hero-section.button')}
            </button>
            <small className=''>{t('hero-section.warning')}</small>
          </div>
        </div>
      </div>
    </section>
  );
}

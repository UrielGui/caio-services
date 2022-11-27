import { useTranslation } from 'react-i18next';
import { BsWhatsapp } from 'react-icons/bs';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section className='py-10 text-xl'>
      <div className='default-container'>
        <div className='text-center flex flex-col items-center py-6'>
          <h1 className='text-xl'>{t('contact.title')}</h1>
          <button type='button' className='bg-defaultGreen rounded-md py-3 px-12 mt-4'>
            <BsWhatsapp className='inline relative -top-0.5' /> 11 94934-2573
          </button>
        </div>
      </div>
    </section>
  );
}

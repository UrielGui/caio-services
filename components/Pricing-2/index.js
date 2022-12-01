import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export default function Pricing2() {
  const { t } = useTranslation();
  const defaultCheckedIcon = { color: '#0C7CE3', marginRight: '5px', fontSize: '1.2em' };
  return (
    <section id='pricing-2' className='py-10 text-xl bg-defaultBlack2'>
      <div className='default-container'>
        <div className='text-center flex flex-col items-center py-6'>
          <h1 className='text-3xl'>{t('pricing-2.title')}</h1>
          <p className='mt-3'>
            {t('pricing-2.description')}{' '}
            <span className='text-defaultCyan'>
              {' '}
              <Link href='/'>{t('pricing-2.link-text')}</Link>
            </span>
          </p>
        </div>
        <div className='default-container min-w-full mt-8'>
          <div className='flex text-xl'>
            <div className='flex flex-grow flex-col '>
              <h2>{t('pricing-2.description-2')}</h2>
              <ul className='space-y-2 mt-6'>
                <li className='flex align-items: center;'>
                  <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
                  <span className='relative -top-0.5 text-xl ml-1'>{t('pricing-2.features.feature-1')}</span>
                </li>
                <li className='flex align-items: center;'>
                  <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
                  <span className='relative -top-0.5 text-xl ml-1'>{t('pricing-2.features.feature-2')}</span>
                </li>
                <li className='flex align-items: center;'>
                  <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
                  <span className='relative -top-0.5 text-xl ml-1'>{t('pricing-2.features.feature-3')}</span>
                </li>
                <li className='flex'>
                  <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
                  <span className='relative -top-0.5 text-xl ml-1'>{t('pricing-2.features.feature-4')}</span>
                </li>
                <li className='flex'>
                  <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
                  <span className='relative -top-0.5 text-xl ml-1'>{t('pricing-2.features.feature-5')}</span>
                </li>
                <li className='flex'>
                  <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
                  <span className='relative -top-0.5 text-xl ml-1'>{t('pricing-2.features.feature-6')}</span>
                </li>
              </ul>
              <button type='button' className='bg-defaultBlue w-64 mt-6 rounded-md py-3 px-5 mb-6'>
                {t('pricing.plans.button')}
              </button>
            </div>
            <div>
              <Image src='/img/management-panel.png' alt='iptv management panel' width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

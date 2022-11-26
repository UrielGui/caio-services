import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();
  return (
    <header className='w-full bg-defaultBlack2 py-6 shadow-[0_-3px_39px_19px_rgba(0,0,0,0.28)]'>
      <div className='default-container min-w-full text-white'>
        <div className='flex text-xl'>
          <div className='place-self-center'>
            <Image src='/img/logo.png' alt={t('head.title')} width={200} height={100} />
          </div>
          <div className='flex flex-grow'>
            <nav className='flex text-white w-full mt-1 pl-4'>
              <ul className='flex px-2 flex-grow'>
                <li className='px-2 cursor-pointer'>{t('header.nav.option-1')}</li>
                <li className='px-2 cursor-pointer'>{t('header.nav.option-2')}</li>
                <li className='px-2 cursor-pointer'>{t('header.nav.option-3')}</li>
              </ul>
            </nav>
          </div>
          <div className='flex'>
            <ul className='flex px-2 flex-grow place-items-center'>
              <li className='px-2 cursor-pointer'>{t('header.nav.option-4')}</li>
              <li className='px-2 cursor-pointer'>
                <button type='button' className='bg-defaultBlue rounded-md py-1.5 px-5'>
                  {t('header.nav.option-5')}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

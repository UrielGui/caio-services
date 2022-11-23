import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();
  return (
    <header className='w-full bg-black2 py-6'>
      <div className='default-container min-w-full text-white'>
        <div className='flex text-xl'>
          <div className='flex flex-grow'>
            <Image
              src='/img/logo.png'
              alt='Caio Services - IPTV Sem Quedas e Sem Travamentos'
              width={224}
              height={40}
            />
            <nav className='flex text-white w-full mt-1 pl-4'>
              <ul className='flex px-2 cursor-pointer flex-grow'>
                <li className='px-2'>{t('header.nav.option1')}</li>
                <li className='px-2'>{t('header.nav.option2')}</li>
                <li className='px-2'>{t('header.nav.option3')}</li>
              </ul>
            </nav>
          </div>
          <div className='flex'>
            <ul className='flex px-2 cursor-pointer flex-grow place-items-center'>
              <li className='px-2'>{t('header.nav.option4')}</li>
              <li className='px-2'>
                <button type='button' className='bg-defaultBlue rounded-md py-1.5 px-5'>
                  {t('header.nav.option5')}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

import { useTranslation } from 'react-i18next';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import Link from 'next/link';

export default function PriceList({ inputChecked }) {
  const { t } = useTranslation();
  const defaultCheckedIcon = { color: '#0CDFD2', marginRight: '5px', fontSize: '1.2em' };
  const mainCheckedIcon = { color: '#0C7CE3', marginRight: '5px', fontSize: '1.2em' };
  const defaultCancelIcon = { color: '#DF0B7D', marginRight: '5px', fontSize: '1.1em' };

  const iptvData = {
    title: 'IPTV',
    price1: t('pricing.plans.plan-1.price-1'),
    price2: t('pricing.plans.plan-1.price-2'),
    price3: t('pricing.plans.plan-1.price-3'),
    feature1: t('pricing.plans.custom-features.pricing-3.feature-1'),
  };

  const p2pData = {
    title: 'P2P',
    price1: t('pricing.plans.plan-2.price-1'),
    price2: t('pricing.plans.plan-2.price-2'),
    price3: t('pricing.plans.plan-2.price-3'),
    feature1: '',
  };

  return (
    <div className='w-full flex justify-between mt-12 lg:mt-28 lg:flex-row flex-col place-items-center'>
      <div className='w-72 sm:w-96 flex flex-col border-defaultGreen border-4 rounded-2xl'>
        <div className='py-6 bg-gradient-to-b from-defaultGreen to-transparent rounded-t-lg'>
          <h1 className='text-3xl font-semibold'>
            {inputChecked ? p2pData.title : iptvData.title} - {t('pricing.plans.title-1')}
          </h1>
          <h2 className='text-3xl font-semibold mt-4'>{inputChecked ? p2pData.price1 : iptvData.price1}</h2>
        </div>
        <ul className='space-y-4 py-6 pl-8'>
          <li className='flex align-items: center;'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base'>
              {t('pricing.plans.custom-features.pricing-1.feature-1')}
            </span>
          </li>
          <li className='flex align-items: center;'>
            <ImCancelCircle style={defaultCancelIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-1')}</span>
          </li>
          <li className='flex align-items: center;'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-2')}</span>
          </li>
          <li className='flex align-items: center;'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-3')}</span>
          </li>
          <li className='flex'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-4')}</span>
          </li>
          <li className='flex'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-5')}</span>
          </li>
          <li className='flex'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-6')}</span>
          </li>
          <li className='flex'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-7')}</span>
          </li>
        </ul>
        <Link
          href={
            inputChecked
              ? 'https://central.caioservices.tech/cart.php?a=add&pid=2&carttpl=standard_cart'
              : 'https://central.caioservices.tech/cart.php?a=add&pid=1&carttpl=standard_cart'
          }
        >
          <button type='button' className='bg-defaultGreen w-4/5 rounded-md py-3 px-5 mb-6'>
            {t('pricing.plans.button')}
          </button>
        </Link>
      </div>
      <div className='w-72 sm:w-96 border-defaultBlue lg:mx-6 border-4 my-14 lg:mt-0 rounded-2xl relative lg:-top-16'>
        <div className='py-6 bg-gradient-to-b from-defaultBlue to-transparent rounded-t-lg'>
          <span className='absolute -top-4 w-[150px] left-0 right-0 ml-auto mr-auto bg-defaultPurple py-px px-4 rounded-md'>
            {t('pricing.plans.recommended')}
          </span>
          <h1 className='text-3xl font-semibold'>
            {inputChecked ? p2pData.title : iptvData.title} - {t('pricing.plans.title-2')}
          </h1>
          <h2 className='text-3xl font-semibold mt-4'>{inputChecked ? p2pData.price2 : iptvData.price2}</h2>
        </div>
        <ul className='space-y-4 py-6 pl-8'>
          <li className='flex align-items: center;'>
            <AiOutlineCheckCircle style={mainCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>
              {inputChecked ? t('pricing.plans.custom-features.pricing-1.feature-1') : iptvData.feature1}
            </span>
          </li>
          <li className='flex align-items: center;'>
            <AiOutlineCheckCircle style={mainCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-1')}</span>
          </li>
          <li className='flex align-items: center;'>
            <AiOutlineCheckCircle style={mainCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-2')}</span>
          </li>
          <li className='flex align-items: center;'>
            <AiOutlineCheckCircle style={mainCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-3')}</span>
          </li>
          <li className='flex'>
            <AiOutlineCheckCircle style={mainCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-4')}</span>
          </li>
          <li className='flex'>
            <AiOutlineCheckCircle style={mainCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-5')}</span>
          </li>
          <li className='flex'>
            <AiOutlineCheckCircle style={mainCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-6')}</span>
          </li>
          <li className='flex'>
            <AiOutlineCheckCircle style={mainCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-7')}</span>
          </li>
        </ul>
        <Link
          href={
            inputChecked
              ? 'https://central.caioservices.tech/cart.php?a=add&pid=4&carttpl=standard_cart'
              : 'https://central.caioservices.tech/cart.php?a=add&pid=3&carttpl=standard_cart'
          }
        >
          <button type='button' className='bg-defaultBlue w-4/5 rounded-md py-3 px-5 mb-6 font-semibold'>
            {t('pricing.plans.button')}
          </button>
        </Link>
      </div>
      <div className='w-72 sm:w-96 flex flex-col border-defaultGreen border-4 rounded-2xl'>
        <div className='py-6 bg-gradient-to-b from-defaultGreen to-transparent rounded-t-lg'>
          <h1 className='text-3xl font-semibold'>
            {inputChecked ? p2pData.title : iptvData.title} - {t('pricing.plans.title-3')}
          </h1>
          <h2 className='text-3xl font-semibold mt-4'>{inputChecked ? p2pData.price3 : iptvData.price3}</h2>
        </div>
        <ul className='space-y-4 py-6 pl-8'>
          <li className='flex align-items: center;'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base'>
              <span className='relative -top-0.5 text-base'>
                {inputChecked ? t('pricing.plans.custom-features.pricing-1.feature-1') : iptvData.feature1}
              </span>
            </span>
          </li>
          <li className='flex align-items: center;'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-1')}</span>
          </li>
          <li className='flex align-items: center;'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-2')}</span>
          </li>
          <li className='flex align-items: center;'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-3')}</span>
          </li>
          <li className='flex'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-4')}</span>
          </li>
          <li className='flex'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-5')}</span>
          </li>
          <li className='flex'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-6')}</span>
          </li>
          <li className='flex'>
            <AiOutlineCheckCircle style={defaultCheckedIcon} />{' '}
            <span className='relative -top-0.5 text-base ml-1'>{t('pricing.plans.default-features.feature-7')}</span>
          </li>
        </ul>
        <Link
          href={
            inputChecked
              ? 'https://central.caioservices.tech/cart.php?a=add&pid=6&carttpl=standard_cart'
              : 'https://central.caioservices.tech/cart.php?a=add&pid=5&carttpl=standard_cart'
          }
        >
          <button type='button' className='bg-defaultGreen w-4/5 rounded-md py-3 px-5 mb-6'>
            {t('pricing.plans.button')}
          </button>
        </Link>
      </div>
    </div>
  );
}

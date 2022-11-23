import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Pricing2() {
  const { t } = useTranslation();
  return (
    <section className='bg-pink-500'>
      <h1>Pricing 2</h1>
    </section>
  );
}

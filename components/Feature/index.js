import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Feature() {
  const { t } = useTranslation();
  return (
    <section className='bg-purple-600'>
      <h1>Feature</h1>
    </section>
  );
}

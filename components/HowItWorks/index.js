import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function HowItWorks() {
  const { t } = useTranslation();
  return (
    <section className='bg-purple-600'>
      <h1>HowItWorks</h1>
    </section>
  );
}

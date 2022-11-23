import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Faq() {
  const { t } = useTranslation();
  return (
    <section className='bg-yellow-600'>
      <h1>FAQ</h1>
    </section>
  );
}

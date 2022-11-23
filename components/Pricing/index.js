import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Pricing() {
  const { t } = useTranslation();
  return (
    <section className='bg-orange-600'>
      <h1>Pricing</h1>
    </section>
  );
}

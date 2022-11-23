import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Description() {
  const { t } = useTranslation();
  return (
    <section className='bg-defaultBlue'>
      <h1>Description</h1>
    </section>
  );
}

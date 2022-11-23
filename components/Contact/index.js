import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section className='bg-cyan-500'>
      <h1>Contact</h1>
    </section>
  );
}

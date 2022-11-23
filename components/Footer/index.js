import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className='bg-green-600'>
      <h1>Footer</h1>
    </footer>
  );
}

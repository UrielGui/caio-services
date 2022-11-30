import { useTranslation } from 'react-i18next';
import Card from './card';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';

export default function Description() {
  const { t } = useTranslation();
  SwiperCore.use([Autoplay]);
  return (
    <section id='description' className='py-8 text-xl'>
      <div className='text-center flex flex-col items-center py-6'>
        <h1 className='text-3xl'>{t('description.title')}</h1>
        <p className='w-2/4 mt-3'>{t('description.description')}</p>
      </div>
      <Swiper
        slidesPerView={7}
        spaceBetween={1}
        slidesPerGroup={1}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
      >
        <div className='flex justify-center overflow-hidden relative'>
          <div className='w-full flex w-max items-center space-x-16'>
            <SwiperSlide>
              <Card background="bg-[url('/img/carroussel/card-1.png')]" />
            </SwiperSlide>
            <SwiperSlide>
              <Card background="bg-[url('/img/carroussel/card-2.png')]" />
            </SwiperSlide>
            <SwiperSlide>
              <Card background="bg-[url('/img/carroussel/card-3.png')]" />
            </SwiperSlide>
            <SwiperSlide>
              <Card background="bg-[url('/img/carroussel/card-4.png')]" />
            </SwiperSlide>
            <SwiperSlide>
              <Card background="bg-[url('/img/carroussel/card-5.png')]" />
            </SwiperSlide>
            <SwiperSlide>
              <Card background="bg-[url('/img/carroussel/card-6.png')]" />
            </SwiperSlide>
            <SwiperSlide>
              <Card background="bg-[url('/img/carroussel/card-7.png')]" />
            </SwiperSlide>
            <SwiperSlide>
              <Card background="bg-[url('/img/carroussel/card-8.png')]" />
            </SwiperSlide>
            <SwiperSlide>
              <Card background="bg-[url('/img/carroussel/card-9.png')]" />
            </SwiperSlide>
            <SwiperSlide>
              <Card background="bg-[url('/img/carroussel/card-10.png')]" />
            </SwiperSlide>
            <SwiperSlide>
              <Card background="bg-[url('/img/carroussel/card-11.png')]" />
            </SwiperSlide>
            <SwiperSlide>
              <Card background="bg-[url('/img/carroussel/card-12.png')]" />
            </SwiperSlide>
          </div>
        </div>
      </Swiper>
    </section>
  );
}

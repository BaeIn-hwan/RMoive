import SwiperCore from "swiper";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";

import LazyImage from "@/components/LazyImage";

import * as S from "./styled";
import * as T from "./types";

SwiperCore.use([A11y, Autoplay, Navigation, Pagination]);

export default function MovieCarousel(props: T.IPropsVisualSlider) {
  const {
    list,
    autoplay = false,
    navigation = true,
    spaceBetween = 0,
    slidesPerView = "auto",
    pagination = false,
  } = props;

  return (
    <>
      <S.Carousel
        a11y={{
          enabled: true,
          prevSlideMessage: "이전 슬라이드",
          nextSlideMessage: "다음 슬라이드",
        }}
        autoplay={autoplay}
        navigation={navigation}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        pagination={pagination}
      >
        {list.map((item, i) => {
          return (
            <S.CarouselSlide key={i}>
              <S.CarouselLink to={`/movie/${item.id}`}>
                <S.CarouselImage>
                  <LazyImage
                    src={`${import.meta.env.VITE_IMAGE_URL}w200${
                      item.poster_path
                    }`}
                  />
                </S.CarouselImage>
              </S.CarouselLink>
            </S.CarouselSlide>
          );
        })}
      </S.Carousel>
    </>
  );
}

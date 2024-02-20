import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";

export default function MovieSlider(props: {
  list: any[];
  options?: SwiperOptions;
}) {
  const { list, options } = props;

  return (
    <Swiper {...options}>
      <SwiperSlide></SwiperSlide>
    </Swiper>
  );
}

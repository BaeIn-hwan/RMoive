import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import * as T from "@/pages/Main/types";

import SliderItem from "@/components/SliderItem";

export default function SliderList(props: { list: T.TTrendMovie[] | [] }) {
  const { list } = props;

  return (
    <Swiper spaceBetween={10} slidesPerView={1}>
      {list.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <SliderItem item={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

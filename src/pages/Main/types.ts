import { TItemKeys } from "@/components/MovieCard/types";
import type { SwiperProps } from "swiper/react";

export interface IPropsVisual {
  list: TPopularMovie[];
  options?: SwiperProps;
}

export type TPopularMovie = TItemKeys;

export type TTrendMovie = TItemKeys & {
  media_type: string;
};

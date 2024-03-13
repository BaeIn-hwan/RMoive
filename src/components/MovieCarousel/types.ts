import type {
  AutoplayOptions,
  NavigationOptions,
  PaginationOptions,
} from "swiper/types";

export interface IPropsVisualSlider {
  list: any[] | [];
  autoplay?: boolean | AutoplayOptions | undefined;
  navigation?: boolean | NavigationOptions | undefined;
  spaceBetween?: string | number | undefined;
  slidesPerView?: number | "auto" | undefined;
  pagination?: boolean | PaginationOptions | undefined;
}

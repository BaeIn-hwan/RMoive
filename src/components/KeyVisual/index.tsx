import { Link } from "react-router-dom";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import * as S from "./styled";

interface IPropsItem {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  video: false;
  vote_average: number;
  vote_count: number;
  title?: string;
  name?: string;
}

SwiperCore.use([Navigation, Pagination]);

export default function KeyVisual({ movies }: { movies: IPropsItem[] }) {
  if (!(movies && movies.length)) return;

  return (
    <S.Container>
      <S.SlideContainer
        a11y={{
          enabled: true,
        }}
        centeredSlides={true}
        navigation={{
          prevEl: ".slide-nav-prev",
          nextEl: ".slide-nav-next",
        }}
        pagination={{
          clickable: true,
          el: ".slide-page",
        }}
        spaceBetween={25}
      >
        {movies.map((item: IPropsItem, i: number) => {
          return (
            <S.SlideItem key={i}>
              <Link to={`/movie/detail/${item.id}`}>
                <S.Poster>
                  <img
                    src={`${import.meta.env.VITE_IMAGE_URL}original${
                      item.backdrop_path
                    }`}
                    alt=""
                  />
                </S.Poster>

                <S.Info>
                  <S.Title>{item.title}</S.Title>
                  {item.original_title && (
                    <S.OriginTitle>{item.original_title}</S.OriginTitle>
                  )}
                </S.Info>
              </Link>
            </S.SlideItem>
          );
        })}
      </S.SlideContainer>

      <S.SlidePagination className="slide-page"></S.SlidePagination>

      <S.SlideNavPrev className="slide-nav-prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={40}
          height={40}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </S.SlideNavPrev>
      <S.SlideNavNext className="slide-nav-next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={40}
          height={40}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </S.SlideNavNext>
    </S.Container>
  );
}

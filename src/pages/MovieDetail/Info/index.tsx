import useIo from "@/hooks/useIo";
import * as S from "./styled";

import LazyImage from "@/components/LazyImage";

export default function Info(props) {
  const { detail } = props;
  const [container, show] = useIo<HTMLImageElement>({
    threshold: 0.5,
  });

  return (
    <S.Container
      className={show ? "animation" : ""}
      ref={container}
      style={{
        backgroundImage: `url(${import.meta.env.VITE_IMAGE_URL}original${
          detail.backdrop_path
        })`,
      }}
    >
      <S.Wrapper>
        <S.Image>
          <LazyImage
            src={`${import.meta.env.VITE_IMAGE_URL}w300${detail.poster_path}`}
            alt=""
          />
        </S.Image>

        <S.Details>
          <S.Genres>
            {detail.genres.map((item) => {
              return <S.GenresItem key={item.id}>{item.name}</S.GenresItem>;
            })}
          </S.Genres>

          <S.Title>
            <S.DefaultTitle>{detail.title}</S.DefaultTitle>
            {detail.original_title && (
              <S.OriginTitle>{detail.original_title}</S.OriginTitle>
            )}
          </S.Title>

          <S.Summary>
            <S.SummaryList>
              <S.SummaryItem>
                <S.SummaryTitle>개봉</S.SummaryTitle>
                <S.SummaryContent>{detail.release_date}</S.SummaryContent>
              </S.SummaryItem>

              <S.SummaryItem>
                <S.SummaryTitle>상영시간</S.SummaryTitle>
                <S.SummaryContent>
                  <span>{detail.runtime}</span>분
                </S.SummaryContent>
              </S.SummaryItem>

              <S.SummaryItem>
                <S.SummaryTitle>평점</S.SummaryTitle>
                <S.SummaryContent>
                  <span style={{ color: "#febe98" }}>
                    {detail.vote_average.toFixed(1)}
                  </span>{" "}
                  / 10.0
                </S.SummaryContent>
              </S.SummaryItem>
            </S.SummaryList>
          </S.Summary>
        </S.Details>
      </S.Wrapper>
    </S.Container>
  );
}

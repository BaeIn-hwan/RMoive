import apiRequest from "@/apis";
import * as T from "../types";
import * as S from "./styled";
import Modal from "@/components/Modal";
import { useState } from "react";

function VisualSkeleton() {
  return (
    <S.SkeletonContainer>
      <S.SkeletonImage></S.SkeletonImage>
      <S.SkeletonInfo>
        <S.SkeletonTitle></S.SkeletonTitle>
        <S.SkeletonOverview>
          {Array.from({ length: 3 }, (_, i) => (
            <S.SkeletonOverviewText key={i}></S.SkeletonOverviewText>
          ))}
        </S.SkeletonOverview>
      </S.SkeletonInfo>
    </S.SkeletonContainer>
  );
}

export default function VisualMovie(props: T.IPropsVisual) {
  const { list, options } = props;
  const [modal, setModal] = useState<boolean>(false);
  const [videoId, setVideoId] = useState<number | null>(null);

  const getVideos = async (_id: number) => {
    try {
      const response = await apiRequest(`/movie/${_id}/videos`, {
        method: "get",
        params: {
          language: "ko-kr",
        },
      });

      if (
        response &&
        response.data &&
        response.data.results &&
        response.data.results.length
      ) {
        setVideoId(response.data.results[0].key);
      }
    } catch (error) {
      console.error(`GetVideos Error.. ${error}`);
    }
  };

  const openTrailerModal = (_id: number) => {
    getVideos(_id);
    setModal(true);
  };

  if (!(list && list.length)) {
    return <VisualSkeleton />;
  }

  return (
    <>
      <S.VisualSwiper {...options}>
        {list.map((item) => (
          <S.VisualSlide key={item.id}>
            <S.VisualContent
              style={{
                backgroundImage: `url(${
                  import.meta.env.VITE_IMAGE_URL
                }/original${item.backdrop_path})`,
              }}
            >
              <S.VisualImage>
                <S.VisualThumb
                  src={`${import.meta.env.VITE_IMAGE_URL}original${
                    item.poster_path
                  }`}
                  alt=""
                />
              </S.VisualImage>

              <S.VisualInfo>
                <S.VisualTitle>
                  {item.title}{" "}
                  {item.original_language !== "ko" && (
                    <>({item.original_title})</>
                  )}
                </S.VisualTitle>
                {item.overview && (
                  <S.VisualOverview>{item.overview}</S.VisualOverview>
                )}

                <S.VisualBtns>
                  <S.VisualViewMore to={`/movie/${item.id}`}>
                    자세히 보기
                  </S.VisualViewMore>
                  <S.VisualTrailer onClick={() => openTrailerModal(item.id)}>
                    예고편 보기
                  </S.VisualTrailer>
                </S.VisualBtns>
              </S.VisualInfo>
            </S.VisualContent>
          </S.VisualSlide>
        ))}
      </S.VisualSwiper>

      {modal && (
        <Modal title={"예고편 보기"} open={modal} close={() => setModal(false)}>
          <S.TrailerPopup>
            {videoId ? (
              <S.TrailerPopupVideo
                src={`https://www.youtube.com/embed/${videoId}`}
              />
            ) : (
              "No trailer"
            )}
          </S.TrailerPopup>
        </Modal>
      )}
    </>
  );
}

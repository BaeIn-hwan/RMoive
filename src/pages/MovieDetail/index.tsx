import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import apiRequest from "@/apis";
import useIo from "@/hooks/useIo";

import * as S from "./styled";

import InfoComponent from "@/pages/MovieDetail/Info";
import CastComponent from "@/pages/MovieDetail/Cast";
import VideoComponent from "@/pages/MovieDetail/Video";
import RecommendComponent from "@/pages/MovieDetail/Recommend";
import Modal from "@/components/Modal";
import LazyImage from "@/components/LazyImage";

export default function MovieDetail() {
  const { type, id } = useParams<{
    type?: "movie" | "tv";
    id: string | undefined;
  }>();

  const [castModal, setCastModal] = useState<boolean>(false);

  const [tagLineRef, tagLineShow] = useIo<HTMLDivElement>({
    threshold: 0.25,
  });

  const [overViewRef, overViewShow] = useIo<HTMLDivElement>({
    threshold: 0.25,
  });

  const getDetail = async () => {
    try {
      const response = await apiRequest(`/${type}/${id}`, {
        method: "get",
        params: {
          language: "ko-KR",
        },
      });

      return response.data;
    } catch (error) {
      console.error(`GetDetail Error.. ${error}`);
      return error;
    }
  };

  const getCast = async () => {
    try {
      const response = await apiRequest(`/${type}/${id}/credits`, {
        method: "get",
        params: {
          language: "ko-KR",
        },
      });

      return response.data.cast;
    } catch (error) {
      console.error(`GetCast Error.. ${error}`);
      return error;
    }
  };

  const getVideos = async () => {
    try {
      const response = await apiRequest(`/${type}/${id}/videos`, {
        method: "get",
        params: {
          language: "ko-KR",
        },
      });

      return response.data.results;
    } catch (error) {
      console.error(`GetVideos Error.. ${error}`);
      return error;
    }
  };

  const getRecommend = async () => {
    try {
      const response = await apiRequest(`/${type}/${id}/recommendations`, {
        method: "get",
        params: {
          language: "ko-KR",
          page: 1,
        },
      });

      return response.data.results;
    } catch (error) {
      console.error(`GetRecommend Error.. ${error}`);
      return error;
    }
  };

  const { isLoading: load01, data: detail } = useQuery({
    queryKey: ["detail", id],
    queryFn: getDetail,
  });

  const { isLoading: load02, data: casts } = useQuery({
    queryKey: ["casts", id],
    queryFn: getCast,
  });

  const { isLoading: load03, data: videos } = useQuery({
    queryKey: ["videos", id],
    queryFn: getVideos,
  });

  const { isLoading: load04, data: recommends } = useQuery({
    queryKey: ["recommends", id],
    queryFn: getRecommend,
  });

  if (load01 && load02 && load03 && load04) return <div>Loading...</div>;

  return (
    <>
      <S.Container>
        {detail && <InfoComponent detail={detail} />}

        <S.Contents>
          {detail && (
            <>
              <S.StorySection>
                {detail.tagline && (
                  <div ref={tagLineRef}>
                    <S.TagLine $show={tagLineShow}>{detail.tagline}</S.TagLine>
                  </div>
                )}

                {detail.overview && (
                  <div ref={overViewRef}>
                    <S.OverView $show={overViewShow}>
                      {detail.overview}
                    </S.OverView>
                  </div>
                )}
              </S.StorySection>
            </>
          )}

          {casts && casts.length > 0 && (
            <S.CastSection>
              <S.SectionHeader>
                <S.SectionTitle>CASTS</S.SectionTitle>

                <S.MoreBtn onClick={() => setCastModal(true)}>
                  MORE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </S.MoreBtn>
              </S.SectionHeader>

              <CastComponent list={casts.slice(0, 5)} />
            </S.CastSection>
          )}

          {videos && videos.length > 0 && (
            <S.VideoSection>
              <S.SectionHeader>
                <S.SectionTitle>VIDEO</S.SectionTitle>
              </S.SectionHeader>

              <VideoComponent list={videos} />
            </S.VideoSection>
          )}

          {recommends && recommends.length > 0 && (
            <S.RecommendSection>
              <S.SectionHeader>
                <S.SectionTitle>RECOMMEND MOVIE</S.SectionTitle>
              </S.SectionHeader>

              <RecommendComponent list={recommends} />
            </S.RecommendSection>
          )}
        </S.Contents>
      </S.Container>

      {castModal && (
        <Modal open={castModal} close={() => setCastModal(false)}>
          <S.ModalCasts>
            <S.ModalCastsTitle>CAST</S.ModalCastsTitle>

            <S.ModalCastsList>
              {casts.map((item) => (
                <S.ModalCastsItem key={item.id}>
                  <S.ModalCastsThumb>
                    <LazyImage
                      src={`${import.meta.env.VITE_IMAGE_URL}w154${
                        item.profile_path
                      }`}
                      alt=""
                    />
                  </S.ModalCastsThumb>
                  <S.ModalCastsInfo>
                    <S.ModalCastsCharacter>
                      {item.character}
                    </S.ModalCastsCharacter>
                    <S.ModalCastsName>{item.name}</S.ModalCastsName>
                  </S.ModalCastsInfo>
                </S.ModalCastsItem>
              ))}
            </S.ModalCastsList>
          </S.ModalCasts>
        </Modal>
      )}
    </>
  );
}

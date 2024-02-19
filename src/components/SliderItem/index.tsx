import React from "react";

import * as T from "@/pages/Main/types";
import * as S from "./styled";

function SlideItemImage({ src }: { src: string }) {
  return (
    <S.SliderImage>
      <img src={`${import.meta.env.VITE_IMAGE_URL}/w185/${src}`} alt="" />
    </S.SliderImage>
  );
}

function SlideItemInfo({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default function SliderItem(props: {
  image: React.ReactNode;
  info?: React.ReactNode;
}) {
  const { image, info } = props;

  return (
    <div>
      {image}
      <div>{info}</div>
    </div>
  );
}

SliderItem.Image = SlideItemImage;
SliderItem.Info = SlideItemInfo;

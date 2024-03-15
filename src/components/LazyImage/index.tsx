import useIo from "@/hooks/useIo";
import * as S from "./styled";

interface IPropsLazyImage {
  src: string;
  alt?: string;
}

export default function LazyImage(props: IPropsLazyImage) {
  const { src, alt = "" } = props;
  const [ref, show] = useIo<HTMLImageElement>();

  return (
    <>
      {!show && <S.Loading></S.Loading>}
      <img src={src} alt={alt} ref={ref} />
    </>
  );
}

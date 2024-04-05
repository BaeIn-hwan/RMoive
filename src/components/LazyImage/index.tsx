import useIo from "@/hooks/useIo";
import * as S from "./styled";
import NoImage from "@/assets/no-image.png";

interface IPropsLazyImage {
  src: string;
  alt?: string;
}

export default function LazyImage(props: IPropsLazyImage) {
  const { src, alt = "" } = props;
  // const [ref, show] = useIo<HTMLImageElement>();
  if (src.search("null") !== -1) {
    return (
      <div style={{ backgroundColor: "#fff" }}>
        <img src={NoImage} alt={alt} />
      </div>
    );
  }

  return (
    <>
      {/* {!show && <S.Loading></S.Loading>} */}
      {/* ref={ref} */}
      <img src={src} alt={alt} />
    </>
  );
}

import VideoBox from "@/components/VideoBox";
import * as S from "./styled";

interface IProps {
  list: any[];
}

export default function VideoSection(props: IProps) {
  const { list } = props;

  console.log(list);

  if (!(list && list.length)) return;

  return (
    <S.VideoList>
      {list.map((item) => (
        <S.VideoItem key={item.id}>
          <VideoBox videoKey={item.key} styles={{ aspectRatio: "4 / 3" }} />
          <S.VideoTitle>{item.name}</S.VideoTitle>
        </S.VideoItem>
      ))}
    </S.VideoList>
  );
}

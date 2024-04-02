import VideoBox from "@/components/VideoBox";
import * as S from "./styled";
import { getDate } from "@/utils/date";

interface IProps {
  list: any[];
}

export default function VideoSection(props: IProps) {
  const { list } = props;

  if (!(list && list.length)) return;

  return (
    <S.Container>
      <S.List>
        {list.map((item) => (
          <S.Item key={item.id}>
            <VideoBox
              videoKey={item.key}
              styles={{
                overflow: "hidden",
                borderRadius: "10px",
                fontSize: 0,
                aspectRatio: "4 / 3",
              }}
            />

            <S.Info>
              <S.Title>{item.name}</S.Title>
              <S.Date>{getDate(item.published_at)}</S.Date>
            </S.Info>
          </S.Item>
        ))}
      </S.List>
    </S.Container>
  );
}

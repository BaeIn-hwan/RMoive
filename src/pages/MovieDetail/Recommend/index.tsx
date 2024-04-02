import MovieCarousel from "@/components/MovieCarousel";

export default function Recommend(props) {
  const { list } = props;

  return <MovieCarousel list={list} spaceBetween={20} navigation={false} />;
}

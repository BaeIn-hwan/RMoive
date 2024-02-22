export type TItemKeys = {
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
};

export interface IPropsItem {
  item: TItemKeys;
  type: "tv" | "movie" | undefined;
}

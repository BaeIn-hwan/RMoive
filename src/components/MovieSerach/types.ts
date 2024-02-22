import { Dispatch, SetStateAction } from "react";

export interface IPropsMovieSearch {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

import { create } from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  popular: [],
  setPopular: (newList) =>
    set((state) => ({
      popular: [...state.popular, ...newList],
    })),
});

const useMovies = create(
  import.meta.env.MODE !== "production" ? devtools(store) : store
);

export default useMovies;

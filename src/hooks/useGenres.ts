import genres from "../data/genres";
export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}
// minimise the impact of this change on the consumers of this hook e.g. genre list
const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;

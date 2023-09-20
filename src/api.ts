import axios from "axios";

const API_KEY = "be38677d3590afbf911df86cd6fbe3f6";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  vote_average: string;
}
export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return axios
    .get(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`)
    .then((response) => response.data)
    .catch((error) => {
      // 오류 처리를 원하는 대로 수행합니다.
      console.error("API 호출 중 오류 발생:", error);
      throw error; // 오류를 호출하는 쪽으로 다시 전파할 수 있습니다.
    });
}

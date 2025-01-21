import axios from "axios";

const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
const BASE_URL = "https://api.pexels.com/v1";

export const fetchPhotos = async (
  query: string,
  page: number,
  perPage: number
) => {
  const response = await axios.get(`${BASE_URL}/search`, {
    headers: { Authorization: API_KEY },
    params: { query, page, per_page: perPage },
  });
  return response.data.photos;
};

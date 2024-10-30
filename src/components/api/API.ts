import axios from "axios";
import { FetchImage } from "../types";

export const fetchImg = async (
  page = 1,
  query: string
): Promise<FetchImage> => {
  const { data } = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      client_id: "oYck8WeKREXs7oGRFkeIWXTu0il2LvhORX7zTD5dliA",
      query: query,
      per_page: 12,
      page: page,
    },
  });
  return data;
};

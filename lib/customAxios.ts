import axios from "axios";
import { getToken } from "./token";

type method = "GET" | "POST" | "PUT" | "DELETE";
type url = string;
type data = any;

axios.defaults.baseURL = process.env.FECTH_URL;
export const customAxios = async (method: method, url: url, data?: data) => {
  const config = {
    url,
    method,
    data,
    headers: {
      "Context-type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  };
  const result = await axios(config);

  return result;
};

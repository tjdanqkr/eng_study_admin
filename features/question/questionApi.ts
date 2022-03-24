import axios from "axios";
import { customAxios } from "../../lib/customAxios";

export async function getAllQuestion() {
  const result = await customAxios("GET", "/question");

  return result;
}

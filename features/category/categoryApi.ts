import axios from "axios";
import { customAxios } from "../../lib/customAxios";

export async function getAllCategory() {
  const result = await customAxios("GET", "/category");

  return result;
}

import axios from "axios";
import { customAxios } from "../../lib/customAxios";
import { user, userInfomation } from "./authSlice";

export async function fetchLogin(user: user) {
  const result = await customAxios("POST", "/auth/signin", user);

  return result;
}

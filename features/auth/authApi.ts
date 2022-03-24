import axios from "axios";
import { customAxios } from "../../lib/customAxios";
import { SignIn, userInfomation } from "./authSlice";

export async function login(infomation: SignIn) {
  const result = await customAxios("POST", "/auth/signin", infomation);

  return result;
}
export async function getAllUser() {
  const result = await customAxios("GET", "/auth");

  return result;
}

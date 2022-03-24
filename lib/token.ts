import { customAxios } from "./customAxios";

const TOKEN = "token";

export const saveToken = (token: string) => {
  localStorage.setItem(TOKEN, token);
};
export const clearToken = () => {
  localStorage.setItem(TOKEN, "");
};

export const getToken = () => {
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) return localStorage.getItem(TOKEN);
  return;
};
export const checkToken = async () => {
  const response = await customAxios("GET", "/auth/adminme");
  if (response.status === 200) return true;
  return false;
};

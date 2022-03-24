const TOKEN = "token";

export const saveToken = (token: string) => {
  localStorage.setItem(TOKEN, token);
};
export const clearToken = () => {
  localStorage.setItem(TOKEN, "");
};

export const getToken = () => {
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) localStorage.getItem(TOKEN);
};

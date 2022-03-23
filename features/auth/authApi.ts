import { user, userInfomation } from './authSlice';

export async function fetchLogin(
  user: user,
): Promise<{ data: userInfomation }> {
  const response = await fetch('/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user }),
  });
  const result = await response.json();

  return result;
}

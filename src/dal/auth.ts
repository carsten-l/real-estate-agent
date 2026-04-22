const AUTH_ENDPOINT = "https://dinmaegler.onrender.com/auth/local";

type AuthUser = {
  id: number;
  username: string;
  email: string;
};

type LoginResponse = {
  jwt: string;
  user: AuthUser;
};

async function parseResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new Error(`Failed to load data: ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

export async function login(identifier: string, password: string): Promise<LoginResponse> {
    "use server";
  const response = await fetch(AUTH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    body: JSON.stringify({
      identifier,
      password,
    }),
  });

  return parseResponse<LoginResponse>(response);
}

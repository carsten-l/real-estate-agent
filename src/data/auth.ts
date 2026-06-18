const AUTH_ENDPOINT = "https://dinmaegler.onrender.com/auth/local";
const REGISTER_ENDPOINT = "https://dinmaegler.onrender.com/auth/local/register";

type AuthUser = {
  id: number;
  username: string;
  email: string;
};

type LoginResponse = {
  jwt: string;
  user: AuthUser;
};

type RegisterPayload = {
  username: string;
  email: string;
  password: string;
};

type RegisterResponse = {
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

export async function registerUser(payload: RegisterPayload): Promise<RegisterResponse> {
  "use server";

  const response = await fetch(REGISTER_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    body: JSON.stringify({
      username: payload.username,
      email: payload.email,
      identifier: payload.email,
      password: payload.password,
    }),
  });

  console.log("response: ", response);

  return parseResponse<RegisterResponse>(response);
}

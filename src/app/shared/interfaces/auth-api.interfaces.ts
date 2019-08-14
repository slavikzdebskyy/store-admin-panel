export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IAuthResponse {
  status: boolean;
  message?: string;
  token?: string;
  error?: object;
}

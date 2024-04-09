export interface Login {
    email?: string;
    password?: string;
  }

export interface LoginResponce{
  token?: string;
  success?: boolean;
}
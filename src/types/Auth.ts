export interface UserValues {
  [key: string]: string;
  email: string;
  password: string;
}
export interface Valid {
  [key: string]: boolean;
  email: boolean;
  password: boolean;
}

export interface Error {
  response: { data: { message: string } };
}

export interface UserTokenPayload {
  sub: string;
};

export interface UserRequestData {
  name: string;
  email:string;
  password: string;
}

export interface UserRequestCredentials {
  email:string;
  password: string;
}

export interface UserQueryData {
  id?: string;
  name?: string;
  email?:string;
  password?: string;
}

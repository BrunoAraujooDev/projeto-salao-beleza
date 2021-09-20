import http from "../config/http";

export const authServiceLogin = ( data ) => http.post("auth/local", data);

export const authServiceRegister = ( data ) => http.post("auth/local/register", data);

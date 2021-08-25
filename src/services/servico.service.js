import http from "../config/http";

export const callServices = () => http.get("/servicos");


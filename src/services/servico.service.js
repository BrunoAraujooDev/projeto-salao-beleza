import http from "../config/http";

export const callServices = () => http.get("/servicos");

export const getServiceById = (id) => http.get(`servicos/${id}`);


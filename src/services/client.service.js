import http from "../config/http";

const path = "/clientes"


export const getClientService = (page, limit) => http.get(`${path}?_limit=${limit}&_start=${limit * page - limit}&_sort=id:DESC`);

export const getCountClients = () => http.get(`${path}/count`);

export const getClientServiceById = (id) => http.get(`${path}/${id}`);

export const deleteServiceClient = (id) => http.delete(`${path}/${id}`);

export const createNewClient = (data) => http.post(`${path}`, data);

export const editNewClient = ({id, ...data}) => http.put(`${path}/${id}`, data);

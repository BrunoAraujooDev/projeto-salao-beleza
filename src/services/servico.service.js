import http from "../config/http";

const path = "/servicos"

export const callServices = () => http.get(path);

export const getServiceById = (id) => http.get(`${path}/${id}`);

export const createNewService = (data) => http.post(path, data);

export const editNewService = ({id, ...data}) => http.put(`${path}/${id}`, data);


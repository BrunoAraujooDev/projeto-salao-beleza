import axios from "axios"; // import da dependencia
import { getToken } from "./storage";



const { REACT_APP_API: api } = process.env;

// criando um client http através do AXIOS
const http = axios.create({
  baseURL: api,
});


if(getToken()){
  http.defaults.headers["Authorization"] = `bearer ${getToken().jwt}`
}

// Definindo o header padrão da aplicação
http.defaults.headers["content-type"] = "application/json";

export default http;

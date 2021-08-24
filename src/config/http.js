import axios from "axios"; // import da dependencia



const { REACT_APP_API: api } = process.env;

// criando um client http através do AXIOS
const http = axios.create({
  baseURL: api,
});

// Definindo o header padrão da aplicação
http.defaults.headers["content-type"] = "application/json";

export default http;

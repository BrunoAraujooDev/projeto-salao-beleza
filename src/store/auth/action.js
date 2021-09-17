import { navigate } from "@reach/router";
import { toast } from "react-toastify";
import http from "../../config/http";
import { saveUser } from "../../config/storage";
import { authServiceLogin } from "../../services/auth.service";
import { AUTH } from "../types";

export const authLogin = (form) => {

    const routeOutside = {
        authenticated: "/admin",
        Empreendedor: "/client"
    };

    return async (dispatch) => {
        dispatch({type: AUTH.loading, result: true});
        try{
            const result = await authServiceLogin(form);
            if(result.data){
                await saveUser(result.data)
                console.log('result.data', result.data)
                http.defaults.headers["Authorization"] = `bearer ${result.data.jwt}`
                dispatch({type: AUTH.login, result: result.data});
                const role = result.data.user.role.type;
                console.log('role', role)
                navigate(routeOutside[role]);
            }

        } catch (error){
            dispatch({type: AUTH.loading, result: false});
            toast.error("Não foi possível efetuar o login, tente novamente!",{position: "top-center", theme: "colored"})
        }
    }
}
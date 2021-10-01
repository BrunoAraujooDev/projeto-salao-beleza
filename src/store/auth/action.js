import { navigate } from "@reach/router";
import { toast } from "react-toastify";
import { routeOutside } from "../../config/auth";
import http from "../../config/http";
import { saveUser } from "../../config/storage";
import { authServiceLogin, authServiceRegister } from "../../services/auth.service";
import { AUTH } from "../types";

export const authLogin = (form) => {


    return async (dispatch) => {
        dispatch({type: AUTH.loading, result: true});
        try{
            const result = await authServiceLogin(form);
            if(result.data){
                await saveUser(result.data)
                http.defaults.headers["Authorization"] = `bearer ${result.data.jwt}`
                dispatch({type: AUTH.login, result: result.data});
                const role = result.data.user.role.type;
                navigate(routeOutside[role]);
            }

        } catch (error){
            dispatch({type: AUTH.loading, result: false});
            toast.error("Não foi possível efetuar o login, tente novamente!",{position: "top-center", theme: "colored"})
        }
    }
}

export const authRegister = (form) => {

    return async (dispatch) => {
        dispatch({type: AUTH.loading, result: true});
        try{
            const result = await authServiceRegister(form);
            if(result.data){
                dispatch(
                    authLogin({
                        identifier: form.email,
                        password: form.password
                    })
                )
                // toast.success(`Usuário ${form.username} cadastrado com sucesso!`);
                // dispatch({type: AUTH.loading, result: false});
            }

        } catch (error){
            dispatch({type: AUTH.loading, result: false});
            toast.error("Não foi possível efetuar o login, tente novamente!",{position: "top-center", theme: "colored"})
        }
    }
}

export const setNewAuth = (data) => {
    return  (dispatch) => {
        dispatch({type: AUTH.setNewAuth, result: data})
    }
}

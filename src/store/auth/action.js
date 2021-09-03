import { navigate } from "@reach/router";
import { saveUser } from "../../config/storage";
import { authServiceLogin } from "../../services/auth.service";
import { AUTH } from "../types";

export const authLogin = (form) => {
    return async (dispatch) => {
        try{
            const result = await authServiceLogin(form);
            if(result.data){
                saveUser(result.data)
                dispatch({type: AUTH.login, result: result.data});
                navigate("/admin");
            }

        } catch (error){
            console.log(error);
        }
    }
}
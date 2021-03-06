import { Link } from "@reach/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authLogin } from "../../store/auth/action";
import "./login.css";

const Login = () => {

    const dispatch = useDispatch();
    const [form, setForm] = useState({});


    const authLoading = useSelector( state => state.auth.loading);


    const handleForm = (event) => {
        setForm({
                ...form,
                [event.target.name]: event.target.value
            })
    }

    const handleSubmit = () => dispatch(authLogin(form));

    const estaValido = () => Object.keys(form).length === 0 || form.identifier?.length === 0 || form.password?.length === 0;


    return (
        <div id="div-form">
            <form onSubmit={e => e.preventDefault()} id="login-form" >
                <div className="mb-3 login-div">
                    <input type="text" className="form-input" name="identifier" required aria-describedby="emailHelp"
                        onChange={handleForm}
                        value={form.identifier || ""} />
                    <label htmlFor="email" className="form-label">Email</label>
                </div>
                <div className="mb-3 login-div">
                    <input type="password" className="form-input" name="password" required
                        onChange={handleForm} 
                        value={form.password || ""}/>
                    <label htmlFor="password" className="form-label">Senha</label>
                </div>
                    <button type="submit" className="btn login-botao" disabled={estaValido()}
                    onClick={handleSubmit}
                    >{authLoading ? "Carregando" :"Enviar"}
                    </button>
                    <Link to="/signup" id="registrar">Registre-se</Link>
            </form>
        </div>
    );
}

export default Login;







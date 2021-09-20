import { Link, navigate } from "@reach/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authRegister } from "../../store/auth/action";
import "./login.css";

const Register = () => {

    const dispatch = useDispatch();
    const [form, setForm] = useState({});


    const authLoading = useSelector(state => state.auth.loading);


    const handleForm = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = () => {
        dispatch(authRegister(form))
            .then(() => {
                setForm({})
                setTimeout(() => {
                    navigate("/login");
                }, 2000)
            })
    };

    const estaValido = () => Object.keys(form).length === 0 || form.username?.length === 0 || form.email?.length === 0 || form.password?.length === 0;


    return (
        <div id="div-form">
            <form onSubmit={e => e.preventDefault()} id="login-form" >
                <h3>Cadastre-se</h3>
                <div className="mb-3 login-div">
                    <input type="text" className="form-input" name="username" required aria-describedby="emailHelp"
                        onChange={handleForm}
                        value={form.username || ""} />
                    <label htmlFor="email" className="form-label">Nome</label>
                </div>
                <div className="mb-3 login-div">
                    <input type="text" className="form-input" name="email" required aria-describedby="emailHelp"
                        onChange={handleForm}
                        value={form.email || ""} />
                    <label htmlFor="email" className="form-label">Email</label>
                </div>
                <div className="mb-3 login-div">
                    <input type="password" className="form-input" name="password" required
                        onChange={handleForm}
                        value={form.password || ""} />
                    <label htmlFor="password" className="form-label">Senha</label>
                </div>
                <button type="submit" className="btn login-botao" disabled={estaValido()}
                    onClick={handleSubmit}
                >{authLoading ? "Carregando" : "Enviar"}
                </button>
                <Link to="/login" id="registrar">Registre-se</Link>
            </form>
        </div>
    );
}

export default Register;







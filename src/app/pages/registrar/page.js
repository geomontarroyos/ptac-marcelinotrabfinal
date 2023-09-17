'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../../global.css"

const Formulario = () => {

  const handlerLogin = async (e) => {
    e.preventDefault();
    toast.success('registrado com sucesso')
  }
  return (
    <div className="body">
      <h1>Login</h1>
      <form onSubmit={handlerLogin}>

      <input className="inputs"
          placeholder='nome'
          type="nome" >
        </input>
        <input className="inputs"
    
          placeholder='E-mail'
          type="email">
        </input>

        <input className="inputs"
          placeholder='Senha'
          type='password'
        >
        </input>
        <button className="botao">Entrar</button>
      </form>
      <ToastContainer/>
    </div>
  )
};

export default Formulario;


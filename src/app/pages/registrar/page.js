'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Formulario = () => {

  const handlerLogin = async (e) => {
    e.preventDefault();
    toast.success('registrado com sucesso')
  }
  return (
    <div className="registrar">
      <h1>Login</h1>
      <form onSubmit={handlerLogin}>

      <input
          placeholder='nome'
          type="nome" >
        </input>
        <input
    
          placeholder='E-mail'
          type="email">
        </input>

        <input
          placeholder='Senha'
          type='password'
        >
        </input>
        <button>Entrar</button>
      </form>
      <ToastContainer/>
    </div>
  )
};

export default Formulario;


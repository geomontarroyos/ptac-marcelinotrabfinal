'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Formulario = () => {

  const handlerLogin = async (e) => {
    e.preventDefault();
    toast.success('alterado com sucesso')
  }
  return (
    <div className="alterar">
      <h1>Login</h1>
      <form onSubmit={handlerLogin}>

  <div className= "inputs">
      <input  placeholder='nome' type="nome" >
        </input>
        </div>

        <div className= "inputs">
        <input  placeholder='E-mail' type="email">
        </input>
  </div>

  <div className= "inputs">
        <input placeholder='Senha'  type='password' >
        </input>
        </div>

        <button>Entrar</button>
        <button><a href="/pages/dashboard">Voltar</a></button>
      </form>
      <ToastContainer/>
    </div>
  )
};

export default Formulario;


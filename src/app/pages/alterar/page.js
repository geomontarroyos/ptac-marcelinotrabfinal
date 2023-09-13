'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Formulario = () => { 
  const handlerLogin = async (e) => {
    e.preventDefault();
    toast.success('Alterado com sucesso!!!!!!!!!!')
  }
  return (
    <body>
    <div class="body">
      <form onSubmit={handlerLogin}>
      <h1>Entrar</h1>
      <input placeholder='Nome' type="nome" ></input>
        <input placeholder='E-mail' type="email"></input>
        <input placeholder='Senha' type='password'> </input>
        <button>Entrar</span></button>
        <button><a href="/pages/dashboard">Voltar</a></button>
      </form>
      <ToastContainer/>
    </div>
    </body>
  )
};

export default Formulario;
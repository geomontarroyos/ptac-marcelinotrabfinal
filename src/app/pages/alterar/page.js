'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Menu from "@/app/componentes/menu";
import "../../global.css"

const Formulario = () => {

  const handlerLogin = async (e) => {
    e.preventDefault();
    toast.success('Alterado com sucesso')
  }
  return (
    <div className="body">
      <h1>Página para alterar usuário</h1>
      <form onSubmit={handlerLogin}>

  <div className= "sla">
      <input  placeholder='nome' type="nome" className= "inputs" >
        </input>
        </div>

        <div className= "sla">
        <input  placeholder='E-mail' type="email" className= "inputs">
        </input>
  </div>

  <div className= "sla">
        <input placeholder='Senha'  type='password' className= "inputs" >
        </input>
        </div>

        <button className='entrar'>Alterar</button> <button className='voltar'><a className='apvolt' href="/pages/dashboard">Voltar</a></button>
        
      </form>
      <ToastContainer/>
    </div>
  )
}

export default Formulario;


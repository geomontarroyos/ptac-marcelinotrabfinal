'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../../global.css"

const Formulario = () => {


const { push } = useRouter();

  const handlerFormSubmit = async (event) =>{
    event.preventDefault();
    try{
      await postUsers(user);
      await new Promisse((resolve) => {
        toast.sucess("usuario cadastrado");
        setTimeout(resolve, 5000);
      });
      return push("/pages/dashboard/")
    }catch{
      toast.error("erro ao cadastrar");
    }
  }


  return (
    <div className="body">
      <h1>Página de registro</h1>
      <form onSubmit={handlerFormSubmit }>   

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

        <button className='entrar'>Registrar</button>
        <button className='voltar'><a className='apvolt' href="/pages/dashboard">Voltar</a></button>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default Formulario; 


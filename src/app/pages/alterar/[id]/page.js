'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "../../global.css"

const Formulario = ({params}) => {
const id = params.id
const [user, setUser] = useState({
  name: '',
  email: '',
  password: '',
});
  const handlerLogin = async (e) => {
    e.preventDefault(); 
    try{
      console.log(user)
      await updateUser(user,id);
   
      return push("/pages/dashboard/")
    }catch{
      toast.error("erro ao cadastrar");
    }
  }

    // cancelar um evento
    toast.success('Alterado com sucesso')
  }
  return (
    <div className="body">
      <h1>Página para alterar usuário</h1>
      <form onSubmit={handlerLogin}>

  <div className= "sla">
      <input  placeholder='nome' type="nome" className= "inputs" onChange={(e) => { setUser({ ...user, name: e.target.value }) }}>
        </input>
        </div>

        <div className= "sla">
        <input  placeholder='E-mail' type="email" className= "inputs" onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
  </div>

  <div className= "sla">
        <input placeholder='Senha'  type='password' className= "inputs" onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        </div>

        <button className='entrar'>Alterar</button> <button className='voltar'><a className='apvolt' href="/pages/dashboard">Voltar</a></button>
        
      </form>
      <ToastContainer/>
    </div>
  )


export default Formulario;


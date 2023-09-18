'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import "./global.css"

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { push, refresh} = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await handlerAcessUser(user);
      if(userAuth.token === undefined){
        toast.error("Ocorreu um erro no email ou senha!")
      }
      push('/pages/dashboard');
    } catch {
      refresh();
    }
  }
  return (
    <body>
    <div class="body">
      <form onSubmit={handlerLogin}>
      <div>
      </div>
      <fieldset>
      <h1>Faça o login</h1>
        <input className="inputs"
          placeholder='E-mail'
          type="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <input className="inputs"
          placeholder='Senha'
          type='password'
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <br></br>
        <button className="botao">Entrar</button>
        </fieldset>
      </form>
      <ToastContainer/>
    </div>
    </body>
  );
}
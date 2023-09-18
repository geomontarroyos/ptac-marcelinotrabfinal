'use client'
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation"

export default function Header({children}){
const {push} = useRouter();
const sair = (e) =>{
    e.preventDefault();
    Cookies.remove('token');
    push('/')
}

return(
<body>
    <nav>
        <ul className="header">
        <link href="/pages/dashboard">Home</link>
            <link href="/pages/alterar">Alterar</link>
            <link href="/pages/registrar">Registrar</link>
            <button id="link" className="botaoSair" onClick={sair}>Sair</button>

        </ul>
    </nav>
    <div>{children}</div>
</body>
    )
}

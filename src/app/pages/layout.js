'use client'
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation"


export default function Layout({children}){
    const {push} = useRouter();

    const sair = (e) =>{
        e.preventDefault();
        Cookies.remove('token');
        push('/')
    }
    return(
        <body>
            <nav>
                <ul className="menu">
                <li><Link href="/pages/dashboard" id="rota">HOME</Link></li>
<li><Link href="/pages/registrar" id="rota">REGISTRAR</Link></li>
<li><Link href="/pages/alterar" id="rota">ALTERAR</Link></li>
<li><button className="sair" onClick={sair}>Sair</button></li>
</ul>
</nav>
            <div>{children}</div>
        </body>
    )
}




import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import Menu from "@/app/componentes/menu";
import Listar from "@/app/componentes/listar";
import "../../global.css"

export default async function Dashboard() {

    const users = await getUsers();
    return (
        <div> 

<div className="body">
            <Suspense fallback={<p className="carrega"> Carregando pagina...</p>}>
                <Listar className="body" users={users}/>
                <button className="botaoalt"><a href="/pages/alterar">Alterar</a></button>
                <button className="botaoreg"><a href="/pages/registrar">Registrar</a></button>
            </Suspense>
</div>
        </div>
    );
};
'use client'
import Link from 'next/link';

export default function Menu(){
return (
    <nav>
        <ul>
        <li><Link href="/pages/dashboard" id="rota">HOME</Link></li>
        <li><Link href="/pages/registrar" id="rota">Registrar</Link></li>
        <li><Link href="/pages/alterar" id="rota">Alterar</Link></li>
        </ul>
    </nav>
)
}
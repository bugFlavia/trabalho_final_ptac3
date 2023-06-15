'use client'
import Link from 'next/link';

export default function Navbar(){
    return(
        <nav>
            <ul>
                <li><Link href="/" id="rota">Home</Link></li>
                <li><Link href="/cadastro" id="rota">Cadastro</Link></li>
            </ul>
        </nav>
    )
}
'use client'
import Link from 'next/link';
import {Search} from 'lucide-react'

export default function Navbar(){
    return(

        <nav>
            <ul>
                <li><Link href="/" id="rota">HOME</Link></li>
                <li><Link href="/cadastro" id="rota">CADASTRO</Link></li>
                <p id='pesquisa'><input type='search' placeholder='Pesquisar'/><button><Search/></button></p>
            </ul>
            
        </nav>
    )
}
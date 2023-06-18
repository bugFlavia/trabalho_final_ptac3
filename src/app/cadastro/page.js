'use client'
import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'
import Navbar from '../componentes/navbar'
import Rodape from '../componentes/rodape'

export default function Cadastro() {
    const route = useRouter();
    const [titulo, setTitulo] = useState();
    const [descricao, setDescricao] = useState();
    const [preco, setPreco] = useState();
    const [dt_cad, setDt_cad] = useState();
    const [imagem, setImagem] = useState();

    const cadastrar = (e) => {
        e.preventDefault()
        
        const produto = {
            titulo: titulo,
            descricao: descricao,
            preco: preco,
            dt_cad: dt_cad,
            imagem: imagem,
        }
        const produtoJson = JSON.stringify(produto);
        fetch("http://localhost:3003/produto", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: produtoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }

    return (
        <main className='geral h-screen'>
            <Navbar/>
        <div className='mt-20 pb-24 geral'>
            <form className='flex flex-col ml-auto mr-auto w-1/2 bg-white p-10 gap-2 rounded-lg' onSubmit={cadastrar}>
                <input
                    type="text"
                    placeholder='Título:'
                    nome="titulo"
                    onChange={e => setTitulo(e.target.value)}
                /><br/>
                <input
                    type="text"
                    placeholder='Descrição:'
                    nome="descricao"
                    onChange={e => setDescricao(e.target.value)}
                /><br/>
                <input
                    type="number"
                    placeholder='Preço:'
                    nome="preco"
                    onChange={e => setPreco(e.target.value)}
                /><br/>
                <input
                    type="date"
                    placeholder='Data de cadastro:'
                    nome="dt_cad"
                    onChange={e => setDt_cad(e.target.value)}
                /><br/>
                <input
                    type="text"
                    placeholder='URL da imagem:'
                    nome="imagem"
                    onChange={e => setImagem(e.target.value)}
                /><br/>
                <button className='botao' type='submit'>CADASTRAR</button>
                <div>
                </div>
            </form>
        </div>
        <Rodape/>
        </main>
    );
}
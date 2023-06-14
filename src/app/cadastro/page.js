'use client'
import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'

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
        fetch("http://localhost:3003/produtos", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: produtoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }

    return (
        <div className={styles.main}>
            <form  onSubmit={cadastrar}>
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
                    type="text"
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
                <button type='submit'>Cadastrar</button>
                <div>
                    <a href='/'>Voltar</a>
                </div>
            </form>
        </div>
    );
}
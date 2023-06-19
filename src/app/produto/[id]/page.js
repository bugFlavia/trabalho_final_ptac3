'use client'
import { useRouter } from "next/navigation";
import Navbar from "@/app/componentes/navbar";
import Rodape from "@/app/componentes/rodape";

export default async function Produto({ params }) {
    const router = useRouter();
    const id = { id: parseInt(params.id) }

    const idJson = JSON.stringify(id);

    const req = await fetch("http://localhost:3003/produtos", {
        method: "POST",
        cache: "no-cache",
        headers: { 'content-type': 'application/json' },
        body: idJson
    })
    const produto = await req.json();


    const remover = () => {
        console.log(idJson)
        try {
            fetch("http://localhost:3003/produtos", {
                method: "DELETE",
                headers: { 'content-type': 'application/json' },
                body: idJson
            })
            router.push("/");
        } catch (error) {
            alert("Ocorreu um erro" + error)
        }
    }

       const atualizar = () => {
        console.log(idJson)
        try {
            fetch("http://localhost:3003/produto", {
                method: "PUT",
                headers: { 'content-type': 'application/json' },
                body: idJson
            })
            remover()
            router.push("/cadastro");
        } catch (error) {
            alert("Ocorreu um erro" + error)
        }
    }
    return (
        <div className="geral h-screen">
            <Navbar/>
            <div className="geral">

            <div className="bg-white rounded-lg mr-auto ml-auto shadow-xl mt-14 text-center w-1/2 mb-24">
            <h1 className="font-bold pt-4 text-2xl">{produto.titulo}</h1>
            <p className='text-lg mt-2 mb-4'>{produto.descricao}</p>
            <img className="w-1/4 h-1/4 mr-auto ml-auto" src={produto.imagem}/>
            <p className='font-semibold text-lg'>{produto.preco}</p>
            <p>{produto.dt_cad}</p>
            <button className="botao w-80 mt-5 mb-5" onClick={e => e.preventDefault(remover())}>REMOVER</button><br/>
            <button className="botao w-80 mt-5 mb-5" onClick={e => e.preventDefault(atualizar())}>EDITAR</button><br/>

            </div>
            <Rodape/>
            </div>
            
            
        </div>

    )
}

"use client"
import Link from 'next/link';
import Navbar from './componentes/navbar';
import Carrossel from './componentes/carrossel';

export default async function Home() {


  const req = await fetch("http://localhost:3003/produtos", {
    cache: "no-cache"
  });
  const produtos = await req.json();

  return (
    <main  style={{}}>
    <Navbar></Navbar>

    <div className="flex justify-center items-center w-100">
      <Carrossel />
    </div>

    <div className="grid grid-cols-3 gap-5">

      {produtos.map(produtos => (
        <div className=""  key={produtos.id}>
          <h1  className="font-bold text-3xl pb-10 underline">{produtos.titulo}</h1>
          <p> {produtos.descricao}</p>
          <img src={produtos.imagem}/>
          <p>{produtos.preco}</p>
          <p>{produtos.dt_cad}</p>
          <Link href={`/produto/${produtos.id}`}>ver mais</Link>
        
        </div>
      ))}

      </div>
    </main>
  )
}
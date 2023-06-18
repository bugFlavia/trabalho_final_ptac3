"use client"
import Link from 'next/link';
import Navbar from './componentes/navbar';
import Rodape from './componentes/rodape';
import Carrossel from './componentes/carrossel';

export default async function Home() {


  const req = await fetch("http://localhost:3003/produtos", {
    cache: "no-cache"
  });
  const produtos = await req.json();

  return (
    <main className='geral'>
    <Navbar></Navbar>

    <div className="flex justify-center items-center w-100">
      <Carrossel />
    </div>

    <div className="grid grid-cols-4 gap-5 mb-24">

      {produtos.map(produtos => (
        <div className="produto"  key={produtos.id}>
          <h1  className="font-bold text-2xl">{produtos.titulo}</h1>
          <p className='text-lg mt-2 mb-4'> {produtos.descricao}</p>
          <img className='w-1/2 h-96' src={produtos.imagem}/>
          <p className='font-semibold text-lg'>R$ {produtos.preco}</p>
          <p>{produtos.dt_cad}</p>
          <Link className='font-medium text-blue-600 dark:text-blue-500 hover:underline' href={`/produto/${produtos.id}`}>Ver mais</Link>
        
        </div>
      ))}

      </div>
      <Rodape/>
    </main>
  )
}
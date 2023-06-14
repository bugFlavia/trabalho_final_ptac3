"use client"
import Link from 'next/link';

export default async function Home() {

  const req = await fetch("http://localhost:3003/produtos", {
    cache: "no-cache"
  });
  const produtos = await req.json();

  return (
    <main  className="grid grid-cols-3 gap-5"> <Link href="/cadastro" className='voltar'> CADASTRAR </Link>

    <div>

      {produtos.map(produtos => (
        <div  key={produtos.id}>
          <h1>{produtos.titulo}</h1>
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
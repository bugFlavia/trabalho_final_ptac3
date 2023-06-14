"use client"
import Link from 'next/link';

export default async function Home() {

  const req = await fetch("http://localhost:3003/produtos", {
    cache: "no-cache"
  });
  const produtos = await req.json();

  return (
    <main> <Link href="/cadastro" className='voltar'> CADASTRAR </Link>

      {produtos.map(produtos => (
        <div key={produtos.titulo}>
          <p> {produtos.dt_cad}</p>
          <p>{produtos.preco}</p>
          <p>{produtos.descricao}</p>
          <img src={produtos.imagem}/>
          <Link href={`/produto/${produtos.id}`}>ver mais</Link>
        </div>
      ))}
    </main>
  )
}
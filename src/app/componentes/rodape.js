'use client'
import Link from 'next/link';
import {Copyright} from 'lucide-react'

export default function Rodape(){
    return(

        <footer className='grid grid-cols-2 pt-5'>
                <div className='gap-4'>
                   <h1 className="font-bold text-2xl">Criado por:</h1>
                    <h2 className='font-semibold text-lg'>Flavia Nunes Barboza de Morais;</h2>
                    <h3 className='font-semibold text-lg'>Maria Fernada de Souza.</h3> 
                </div>
                
                <div className='gap-4'>
                    <p className='font-semibold text-lg'>Direitos de imagem reservados à:</p>
                    <p className='flex gap-2'><Copyright/><a className='font-medium text-blue-600 dark:text-blue-500 hover:underline' href='https://www.amazon.com.br/'> Amazon Brasil</a></p>
                </div>
                
            
        </footer>
    )
}
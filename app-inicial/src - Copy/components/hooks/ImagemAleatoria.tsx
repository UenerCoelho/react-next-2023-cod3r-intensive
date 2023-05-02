// import Image from "next/image"
import { useState } from "react"

export default function ImagemAleatoria() {
  const [pesquisa, alterarPesquisa] = useState<string>('abstract')
  const [tamanho, alterarTamanho] = useState<number>(300)
  // let pesquisa: string = ""
  const url = "https:source.unsplash.com/featured/"

  // function urlImagem() {
  //   return ``
  // }

  function renderizarButton(valor: string) {
    return (
      <button
        className={`
          bg-blue-500 px-4 py-2 rounded-md
      `}
        onClick={() => {
          alterarPesquisa(valor)
          console.log(valor)
        }}
      >
        {valor}
      </button>
    )
  }
  return (
    <div className="flex flex-col gap-3 border border-zinc-500 p-7 rounded-md">
      <div className="flex justify-center gap-7 mb-5">
        <span>{pesquisa} </span>
        <span>{tamanho}x{tamanho}</span>
      </div>
      <img 
        src={`${url}${tamanho}x${tamanho}?${pesquisa}`} 
        height={300} width={300}
        alt="Imagem"
        className="rounded-md"/>
      <div className="flex justify-between gap-5">
        {renderizarButton("abstract")}
        {renderizarButton("city")}
        {renderizarButton("person")}
      </div>
      <div>
        <input 
          type="number" 
          value={tamanho} 
          className="bg-zinc-800 p-2 rounded-md outline-none" 
          onChange={e => {
            alterarTamanho(+e.target.value)
          }}/>
      </div>
    </div>
  )
}

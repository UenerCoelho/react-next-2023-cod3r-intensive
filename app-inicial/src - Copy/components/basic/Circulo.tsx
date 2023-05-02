interface CirculoProps {
  texto: string
  quasePefeito?: boolean
}

export default function Circulo(props: CirculoProps) {
  console.log(props)
  return (
    <div className={`
    flex justify-center items-center
    h-64 w-64 bg-cyan-500 
    text-black text-3xl
    ${props.quasePefeito ? 'rounded-3xl' : 'rounded-full'}
    `}>
      {props.texto}
    </div>
  )
}
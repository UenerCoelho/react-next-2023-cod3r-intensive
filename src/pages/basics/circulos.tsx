import Circulo from "@/components/basic/Circulo"

export default function PaginaCirculos() {
  return (
    <div className="flex justify-between h-screen items-center">
    <Circulo texto="Circ #1" />
    <Circulo texto="Circ #2"></Circulo>
    <Circulo texto="Circ #3" quasePefeito></Circulo>
    <Circulo texto="Circ #4"></Circulo>
    </div>
  )
}
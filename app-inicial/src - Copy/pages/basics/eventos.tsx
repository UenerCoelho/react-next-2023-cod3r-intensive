import Evento from "@/components/basic/Evento"

export default function PaginaEventos() {
  return (
    <div className={`
      flex justify-center items-center flex-wrap gap-5
      h-screen`
      }>
      <Evento></Evento>
      <Evento></Evento>
      <Evento></Evento>
    </div>
  )
}
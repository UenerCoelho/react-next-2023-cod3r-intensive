export default function Box(props: any) {
  return (
    <div className={`
      flex justify-center items-center
      bg-purple-500 m-2 rounded-md p-2
      w-64 h-64 text-5xl font-black
    `}>
      {props.children}
    </div>
  )
}
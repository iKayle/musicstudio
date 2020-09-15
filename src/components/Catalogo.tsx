export function Catalogo() {
  return (
    <div className="container mx-auto">
      <div className="my-12">
        <h1 className="text-5xl text-center text- text-danger-800">
          Dê à <span className="font-bold">sua musica</span> o que ela precisa
        </h1>
        <p className="text-xl tracking-wider text-center text-gray-600 ">
          Queremos ajudá-lo a criar a melhor peça de música. Nosso estúdio se
          esforça <br /> para ser o lugar onde você se sente livre e criativo.
        </p>
      </div>
      <div className="grid grid-flow-col grid-cols-3 gap-10 px-40">
        <div className="w-full bg-primary-500">
          <img src="/card1.jpg" alt="" className="object-cover w-full h-48" />
        </div>
        <div className="w-full bg-primary-500">
          <img src="/card2.jpg" alt="" className="object-cover w-full h-48" />
        </div>
        <div className="w-full bg-primary-500">
          <img src="/card3.jpg" alt="" className="object-cover w-full h-48" />
        </div>
      </div>
    </div>
  )
}

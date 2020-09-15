export function Hero() {
  return (
    <div className="relative w-full fundo1">
      <div className="absolute top-0 z-10 w-full h-full bg-black bg-opacity-25" />
      <div className="flex flex-row justify-around pt-16 pb-32">
        <nav className="z-20 text-3xl font-bold text-white">SONS Estúdio</nav>
        <ul className="z-20 flex flex-row items-baseline pb-5 space-x-3 text-xl text-white cursor-pointer">
          <li className="pr-5 text-sm border-r-2">INÍCIO</li>
          <li className="pr-5 text-sm border-r-2">O ESTÚDIO</li>
          <li className="pr-5 text-sm border-r-2">EQUIPAMENTOS</li>
          <li className="pr-5 text-sm border-r-2">MUSICOS</li>
          <li className="text-sm ">CONTATO</li>
        </ul>
      </div>
      <div className="container flex flex-col items-end justify-end pt-64 pb-16 mx-auto space-y-4 text-white">
        <h1 className="z-20 text-6xl font-light text-white bg-black border border-black">
          ONDE A MÚSICA VEM À VIDA
        </h1>
        <p className="z-20 text-xl tracking-wide text-white bg-black border border-black ">
          Estúdio de gravação no Rio de Janeiro
        </p>
      </div>
    </div>
  )
}

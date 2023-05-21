import { BsPatchCheckFill } from "react-icons/bs";

const List = () => {
  const items = [
    {
      id: 1,
      text: "Transformando a Binance em uma máquina de dinheiro",
    },
    { id: 2, text: "Mindset do arrematante lucrativo" },
    {
      id: 3,
      text: "Saia da teoria - chegou a hora de entender na prática",
    },
    { id: 4, text: "A forma certa de começar nos leilões" },
    { id: 5, text: "A revelação do Método CVEL" },
    { id: 6, text: "Leilão da ao vivo da Binance" },
    { id: 7, text: "Seja um vendedor nato" },
    {
      id: 8,
      text: "Uma lista com mais de 200 criptos",
    },
    {
      id: 9,
      text: "Canal no Telegram",
    },
    {
      id: 10,
      text: "Treinamento consultor de criptos",
    },
  ];
  return (
    <section className="w-full mx-auto py-10 mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4 mt-10">
      <div className="w-10/12 -mb-10 -mt-10 flex flex-col items-center">
        <div className="block max-w-container p-6 bg-gradient-to-r from-black to-gray-900 transition-300  rounded-lg border-1 shadow-md border-btnColor1 drop-shadow-sm shadow-btnColor1">
          <h2 className="mb-2 xs:text-xl sm:text-xl md:text-xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-btnYellowGradient to-btnColor2 text-transparent bg-clip-text text-center">
            TUDO QUE VOCÊ RECEBE AO SE <br></br> MATRICULAR PARA O MÉTODO CVL:
          </h2>
          <ul className="flex flex-col items-center">
            {items.map((item) => (
              <li key={item.id} className="flex items-center py-2">
                <BsPatchCheckFill className="text-btnColor1 mr-2" />
                <p className="font-bodyFont xs:text-xs sm:text-sm md:text-base lg:text-1xl">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center">
            <p className="xs:text-xl sm:text-xl md:text-2xl lg:text-4xl font-bodyFont tracking-tight text-center">
              12x de{" "}
              <span className="xs:text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-bodyFont font-semibold text-textPriceColor animate-pulse">
                R$ 97,14
              </span>
            </p>
            <p className="xs:text-xl sm:text-xl md:text-2xl lg:text-4xl font-bodyFont uppercase pt-10">
              OU 997,00 À VISTA
            </p>
          </div>
        </div>
        <button className="w-2/5 h-14 text-sm font-titleFont rounded-md text-textGreen tracking-wide bg-gradient-to-r from-btnColor1 to-btnColor2 hover:from-btnColor2 hover:to-btnColor1 font-bold py-2 px-4 animate-bounce border shadow-md shadow-btnColor1 xs:text-sm xs:h-20 xs:mt-5 uppercase">
          quero começar agora
        </button>
      </div>
    </section>
  );
};

export default List;

import { motion } from "framer-motion";

const StepLine = () => {
  return (
    <section className="w-full mx-auto py-10 mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
      <div className="w-10/12 -mb-10 -mt-10">
        <h2 className="lg:text-4xl md:text-4xl xm:pt-5 sm:pt-5 font-titleFont font-bold tracking-wide text-center uppercase xs:mt-5">
          VEJA ABAIXO O QUE VOCÊ APRENDERÁ NO MÉTODO CVL:
        </h2>

        <ol className="relative border-l px-5 py-5 border-btnColor1 shadow-md shadow-btnColor1">
          <li className="mb-10 border border-btnColor1 shadow-md shadow-btnColor1 px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-btnColor1 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none text-textLight font-medium">
              <span className="bg-gradient-to-r from-btnYellowGradient to-btnColor2 text-transparent bg-clip-text text-center">
                {" "}
                1ª ETAPA:
              </span>{" "}
              TRANSFORMANDO A BINANCE EM UMA MÁQUINA DE DINHEIRO
            </h3>
            <p className="mb-4 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textGray">
              Você aprenderá mais de 6 formas de gerar dinheiro através do
              mercado da Binance e descobrirá seu perfil de comprador e qual
              moeda é mais interessante para você.
            </p>
          </li>
          <li className="mb-10 border border-btnColor1 shadow-md shadow-btnColor1 px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-btnColor1 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none text-textLight font-medium">
              <span className="bg-gradient-to-r from-btnYellowGradient to-btnColor2 text-transparent bg-clip-text text-center">
                2ª ETAPA:
              </span>{" "}
              MINDSET DO ARREMATANTE LUCRATIVO
            </h3>
            <p className="mb-10 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textGray">
              A Binance existe para ser lucrativa,{" "}
              <span className="underline">
                {" "}
                você precisa estar com a mentalidade certa para utilizá-lo
              </span>
              .
            </p>
          </li>
          <li className="mb-10 border border-btnColor1 shadow-md shadow-btnColor1 px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-btnColor1 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none text-textLight font-medium">
              <span className="bg-gradient-to-r from-btnYellowGradient to-btnColor2 text-transparent bg-clip-text text-center">
                3ª ETAPA:
              </span>{" "}
              SAIA DA TEORIA - CHEGOU A HORA DE ENTENDER NA PRÁTICA
            </h3>
            <p className="mb-10 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textGray">
              Essa etapa vai muito além de uma explicação teórica, você verá na
              tela do meu computador como descobrir todas as criptomoedas,{" "}
              <span className="underline">
                onde estão as melhores oportunidades e como se cadastrar para
                participar de diversos lances
              </span>
              .
            </p>
          </li>
          <li className="mb-10 border border-btnColor1 shadow-md shadow-btnColor1 px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-btnColor1 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none text-textLight font-medium">
              <span className="bg-gradient-to-r from-btnYellowGradient to-btnColor2 text-transparent bg-clip-text text-center">
                4ª ETAPA:
              </span>{" "}
              A FORMA CERTA DE COMEÇAR NAS CRIPTOMOEDAS
            </h3>
            <p className="mb-4 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textGray">
              Vou te revelar a estratégia que eu desenvolvi após centenas de
              arrematações para começar certo nas criptomoedas, com{" "}
              <span className="underline">
                capacidade de fazer 2x, 3x ou até mesmo 10x mais no seu primeiro
                lance
              </span>
              .
            </p>
          </li>
          <li className="mb-10 border border-btnColor1 shadow-md shadow-btnColor1 px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-btnColor1 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none text-textLight font-medium">
              <span className="bg-gradient-to-r from-btnYellowGradient to-btnColor2 text-transparent bg-clip-text text-center">
                5ª ETAPA:
              </span>{" "}
              A REVELAÇÃO DO MÉTODO CVL
            </h3>
            <p className="mb-4 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textGray">
              Tenha o método detalhado ao seu favor. Independente do seu momento
              atual, do que você sabe sobre criptomoedas ou dos seus medos
              atrelados à finanças.{" "}
              <span className="underline">
                Você vai aprender a comprar, vender e enriquecer com segurança
                na Binance
              </span>
              .
            </p>
          </li>
          <li className="mb-10 border border-btnColor1 shadow-md shadow-btnColor1 px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-btnColor1 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none text-textLight font-medium">
              <span className="bg-gradient-to-r from-btnYellowGradient to-btnColor2 text-transparent bg-clip-text text-center">
                6ª ETAPA:
              </span>{" "}
              Lance com Bitcoin
            </h3>
            <p className="mb-4 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textGray">
              Aprenda vendo a minha tela do computador e{" "}
              <span className="underline">
                dando lance comigo ao vivo com bitcoins
              </span>
              .
            </p>
          </li>
          <li className="mb-10 border border-btnColor1 shadow-md shadow-btnColor1 px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-btnColor1 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none text-textLight font-medium">
              <span className="bg-gradient-to-r from-btnYellowGradient to-btnColor2 text-transparent bg-clip-text text-center">
                7ª ETAPA:
              </span>{" "}
              VENDENDO AS CRIPTOMOEDAS
            </h3>
            <p className="mb-4 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textGray">
              Você vai aprender que existem alguns tipos de vendas quando, onde
              e como vender{" "}
              <span className="underline">suas vantagens e desvantagens</span>.
            </p>
          </li>
          <li className="mb-10 border border-btnColor1 shadow-md shadow-btnColor1 px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-btnColor1 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none text-textLight font-medium">
              <span className="bg-gradient-to-r from-btnYellowGradient to-btnColor2 text-transparent bg-clip-text text-center">
                7ª ETAPA:
              </span>{" "}
              INVESTINDO EM JOGOS DE CRIPTO
            </h3>
            <p className="mb-4 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textGray">
              Você vai aprender que existem alguns tipos de jogos onlines e
              quais são para ganhar suas moedas de graça e quais são{" "}
              <span className="underline">suas vantagens e desvantagens</span>.
            </p>
          </li>
          <li className="mb-10 border border-btnColor1 shadow-md shadow-btnColor1 px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-btnColor1 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none text-textLight font-medium">
              <span className="bg-gradient-to-r from-btnYellowGradient to-btnColor2 text-transparent bg-clip-text text-center">
                8ª ETAPA:
              </span>{" "}
              POUPANÇA CRIPTO
            </h3>
            <p className="mb-4 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textGray">
              Nessa etapa, vou relevar o que eu levo em conta ao escolher uma
              cripto moeda para longo prazo e como você deve analisar sobre cada
              caso. Inclusive aprenderá como comprar e quando vender.
            </p>
          </li>
          <li className="mb-10 border border-btnColor1 shadow-md shadow-btnColor1 px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-btnColor1 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none text-textLight font-medium">
              <span className="bg-gradient-to-r from-btnYellowGradient to-btnColor2 text-transparent bg-clip-text text-center">
                9ª ETAPA:
              </span>{" "}
              SEJA UM VENDEDOR NATO
            </h3>
            <p className="mb-4 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textGray">
              Como te falei, minha proposta é que você ganhe dinheiro com
              criptomoedas, portanto, mais que encontrar boas oportunidades eu
              vou te preparar para vender elas.{" "}
              <span className="underline">
                Não basta ser uma boa oportunidade, ela precisa colocar dinheiro
                no seu bolso!
              </span>
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default StepLine;

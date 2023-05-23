import { lucro, muitolucro } from "@/public/assets";
import Image from "next/image";

const Benefits = () => {
  return (
    <section className="w-full mx-auto py-10 mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
      <div className="w-10/12 my-10 flex flex-col items-center">
        <h2 className="lg:text-4xl xs:text-sm sm:text-sm md:text-2xl font-bodyFont tracking-wide text-center">
          E tem mais, tudo o que é comprado nessas condições pode ser vendido
          com <span className="underline">altíssima margem de lucro</span>, como
          foi o caso dessa arrematação que fiz.
        </h2>
        <div className="flex drop-shadow-2x">
          <div className="w-1/2 flex py-5 flex-col items-center mr-2">
            <div>
              <Image className="rounded-t-lg" src={lucro} alt="Lucro obtido" />
            </div>
          </div>
          <div className="w-1/2 flex py-5 flex-col items-center ml-2">
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Image
                className="rounded-t-lg"
                src={muitolucro}
                alt="Lucro obtido"
              />
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg shadow-md shadow-btnColor1">
          <h2 className="lg:text-4xl xs:text-sm sm:text-sm md:text-2xl font-bodyFont tracking-wide text-center text-black">
            Aprenda quais são as moedas mais promissoras e invista com moedas
            conhecidas como{" "}
            <span className="font-bodyFont underline font-semibold text-btnColor1">
              Bitcoin, Ethereum e muito +.
            </span>
          </h2>
        </div>
        <h2 className="lg:text-4xl xs:text-sm sm:text-sm md:text-2xl font-bodyFont tracking-wide text-center mt-10">
          <span className="underline">Tudo isso é apenas uma amostra</span> de
          tudo o que você pode conquistar através desse mercado.
        </h2>
      </div>
      <div className="w-1/5 border border-t border-gray-700"></div>
    </section>
  );
};

export default Benefits;

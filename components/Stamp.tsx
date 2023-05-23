import { garantia, metodocvl } from "@/public/assets";
import Image from "next/image";

const Stamp = () => {
  return (
    <section className="w-full mx-auto py-10 mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4 mt-10 border border-y-btnColor1 border-x-transparent bg-darkBanner">
      <div className="w-10/12 -mb-10 -mt-10">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="mx-auto md:w-2/4">
            <div className="px-10 py-5 lg:mx-20">
              <div>
                <Image
                  className="w-full"
                  src={garantia}
                  width={500}
                  height={500}
                  alt="Criptomoedas"
                />
              </div>
            </div>
          </div>
          <div className="mx-auto md:w-2/4">
            <h2 className="font-titleFont xs:text-xl sm:text-xl md:text-xl xs:text-center md:text-start lg:text-5xl font-semibold">
              Você está 100% seguro!
            </h2>
            <p className="text-base xs:text-base sm:text-base md:text-base xs:text-center md:text-start font-bodyFont tracking-wide py-6">
              Se em até 7 dias corridos após a compra, você entender que não se
              trata de algo que vá realmente mudar a sua vida, basta me enviar
              um único email solicitando o reembolso, e você terá seu dinheiro
              devolvido integralmente.
            </p>
            <button className="w-full h-14 text-sm font-titleFont rounded-md text-textGreen tracking-wide bg-gradient-to-r from-btnColor1 to-btnColor2 hover:from-btnColor2 hover:to-btnColor1 font-bold py-2 px-4 animate-bounce border shadow-md shadow-btnColor1 xs:text-sm xs:h-20 xs:mt-5 uppercase">
              QUERO GARANTIR MINHA VAGA
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      {/* <div className="w-10/12 -mb-10 -mt-10">
        <div className="flex">
          <div className="w-1/4 flex py-5 flex-col items-center">
            <div>
              <Image
                className="w-full"
                src={garantia}
                width={500}
                height={500}
                alt="Criptomoedas"
              />
            </div>
          </div>
          <div></div>
          <div className="w-9/12 px-20 py-5">
            <h2 className="font-titleFont text-5xl font-semibold">
              Você está 100% seguro!
            </h2>
            <p className="text-base font-bodyFont tracking-wide py-6">
              Se em até 7 dias corridos após a compra, você entender que não se
              trata de algo que vá realmente mudar a sua vida, basta me enviar
              um único email solicitando o reembolso, e você terá seu dinheiro
              devolvido integralmente.
            </p>
            <button className="w-full h-14 text-sm font-titleFont rounded-md text-textGreen tracking-wide bg-gradient-to-r from-btnColor1 to-btnColor2 hover:from-btnColor2 hover:to-btnColor1 font-bold py-2 px-4 animate-bounce border shadow-md shadow-btnColor1 xs:text-sm xs:h-20 xs:mt-5 uppercase">
              quero começar agora
            </button>
          </div>
        </div>
      </div> */}
      {/*  */}
    </section>
  );
};

export default Stamp;

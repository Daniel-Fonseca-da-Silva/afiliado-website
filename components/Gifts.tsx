import { bonus1, bonus2, bonus3, bonus4 } from "@/public/assets";
import Image from "next/image";

const Gifts = () => {
  return (
    <section className="w-full mx-auto mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4 mt-10">
      <div className="w-10/12 my-10 flex flex-col items-center">
        <h2 className="lg:text-4xl xs:text-base sm:text-base md:text-2xl font-bodyFont font-semibold tracking-wide text-center mb-5">
          E NÃO É SÓ ISSO… DECIDI TAMBÉM DAR{" "}
          <span className="text-btnColor1">PRESENTES EXCLUSIVOS</span> PARA ESSA
          TURMA!
        </h2>
        <div className="flex flex-col md:flex-row justify-center">
          <div>
            <div className="border border-btnColor1 rounded-lg mr-1">
              <Image
                className="rounded-t-lg rounded-lg py-5"
                src={bonus1}
                alt="Bônus"
              />
              <div className="bg-gradient-to-r from-btnColor2 to-btnYellowGradient mx-2 py-1.5 rounded-lg text-center xs:text-sm sm:text-base md:text-lg lg:text-2xl xl:text-4xl uppercase font-semibold">
                bônus:
              </div>
              <p className="mb-2 xs:text-sm md:text-base lg:text-2xl xl:text-4xl font-bodyFont tracking-tight text-center px-20">
                Mais de 50 modos seguros.
              </p>
            </div>
            <div className="border border-btnColor1 rounded-lg my-5 py-4  mr-1">
              <Image
                className="rounded-t-lg rounded-lg py-5"
                src={bonus2}
                alt="Bônus"
              />
              <div className="bg-gradient-to-r from-btnColor2 to-btnYellowGradient mx-2 py-1.5 rounded-lg text-center uppercase font-semibold mt-4 xs:text-sm sm:text-base md:text-lg lg:text-2xl xl:text-4xl">
                bônus:
              </div>
              <p className="mb-2 font-bodyFont tracking-tight text-center px-20 xs:text-sm md:text-base lg:text-2xl xl:text-4xl">
                Checklist de moedas e plataformas.
              </p>
            </div>
          </div>

          <div>
            <div className="border border-btnColor1 rounded-lg  ml-1">
              <Image
                className="rounded-t-lg rounded-lg py-5"
                src={bonus3}
                alt="Bônus 3"
              />
              <div className="bg-gradient-to-r from-btnColor2 to-btnYellowGradient mx-2 py-1.5 rounded-lg text-center uppercase font-semibold xs:text-sm sm:text-base md:text-lg lg:text-2xl xl:text-4xl">
                bônus:
              </div>
              <p className="mb-2 font-bodyFont tracking-tight text-center xs:text-sm md:text-base lg:text-2xl xl:text-4xl">
                Canal no Telegram.
              </p>
            </div>
            <div className="border border-btnColor1 rounded-lg my-5 py-4  ml-1">
              <Image
                className="rounded-t-lg rounded-lg py-5"
                src={bonus4}
                alt="Bônus 4"
              />
              <div className="bg-gradient-to-r from-btnColor2 to-btnYellowGradient mx-2 py-1.5 rounded-lg text-center uppercase font-semibold mt-4 xs:text-sm sm:text-base md:text-lg lg:text-2xl xl:text-4xl">
                bônus:
              </div>
              <p className="mb-2 font-bodyFont tracking-tight text-center px-20 xs:text-sm md:text-base lg:text-2xl xl:text-4xl xl:pb-10 md:pb-6">
                Como ganhar sem dinheiro.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/5 border border-t border-gray-700"></div>
    </section>
  );
};

export default Gifts;

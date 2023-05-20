import { motion } from "framer-motion";

const ThirdContainer = () => {
  return (
    <section className="w-full mx-auto py-10 mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="md:w-3/5">
          <h2 className="lg:text-4xl xs:text-base sm:text-lg md:text-lg lg:px-10 font-titleFont font-bold tracking-wide uppercase xs:text-center sm:text-center">
            O QUE É O{" "}
            <span className="bg-gradient-to-r from-btnYellowGradient to-btnColor2 text-transparent bg-clip-text text-center">
              MÉTODO CVL?
            </span>
          </h2>
          <p className="lg:mb-2 xs:text-center lg:px-10 lg:text-2xl mt-5 font-semibold font-bodyFont tracking-tight leading-10 xs:text-base sm:text-base md:text-lg xs:px-10 sm:px-10 sm:pb-5">
            O Método CVL foi desenvolvido por Enrico Ganchiel,{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
              após mais de uma década com centenas de arrematações e milhões de
              reais investidos no mercado de moedas. Esse passo a passo
              <br /> <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
                super detalhado e simples de entender, pode te trazer uma alta
                lucratividade já nas próximas semanas.
              </span>
            </span>
          </p>
        </div>
        <div className="md:w-2/5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="md:px-20 md:py-10 xs:py-10 sm:py-10 xs:mr-4 xs:mb-5 bg-btnColor1 border border-btnColor1 rounded-lg shadow bg-gradient-to-r from-cardColor to-bodyColor hover:from-bodyColor hover:to-cardColor"
          >
            <p className="md:mb-2 lg:text-2xl xs:text-sm sm:text-base font-semibold font-bodyFont -tracking-wide text-center">
              Não sabe nada sobre o mercado de cripto:
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="md:px-20 md:py-10 xs:py-10 sm:py-10 xs:mr-4 xs:mb-5 bg-btnColor1 border border-btnColor1 rounded-lg shadow bg-gradient-to-r from-cardColor to-bodyColor hover:from-bodyColor hover:to-cardColor"
          >
            <p className="md:mb-2 lg:text-2xl xs:text-sm sm:text-base font-semibold font-bodyFont -tracking-wide text-center">
              Está buscando uma forma segura e rentável de investir o seu
              dinheiro:
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="md:px-20 md:py-10 xs:py-10 sm:py-10 xs:mr-4 xs:mb-5 bg-btnColor1 border border-btnColor1 rounded-lg shadow bg-gradient-to-r from-cardColor to-bodyColor hover:from-bodyColor hover:to-cardColor"
          >
            <p className="md:mb-2 lg:text-2xl xs:text-sm sm:text-base font-semibold font-bodyFont -tracking-wide text-center">
              Não tem muito dinheiro, mas gostaria de investir:
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="md:px-20 md:py-10 xs:py-10 sm:py-10 xs:mr-4 xs:mb-5 bg-btnColor1 border border-btnColor1 rounded-lg shadow bg-gradient-to-r from-cardColor to-bodyColor hover:from-bodyColor hover:to-cardColor"
          >
            <p className="md:mb-2 lg:text-2xl xs:text-sm sm:text-base font-semibold font-bodyFont -tracking-wide text-center">
              Quer investir em poupança de criptomoedas:
            </p>
          </motion.div>
        </div>
      </div>
      {/* <div className="flex flex-col sm:flex-row sm:justify-center">
        <div className="mb-4 md:mr-4 md:mb-0">
          <div className="w-1/2 flex py-5 flex-col items-center">
            <h2 className="lg:text-4xl xs:text-base sm:text-sm md:text-lg lg:px-10 font-titleFont font-bold tracking-wide uppercase">
              O QUE É O{" "}
              <span className="bg-gradient-to-r from-btnYellowGradient to-btnColor2 text-transparent bg-clip-text text-center">
                MÉTODO CVL?
              </span>
            </h2>
            <p className="lg:mb-2 xs:text-center lg:px-10 lg:text-2xl mt-5 font-semibold font-bodyFont tracking-tight leading-10 xs:text-base sm:text-sm md:text-lg xs:px-0 sm:px-0">
              O Método CVL foi desenvolvido por Enrico Ganchiel,{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
                após mais de uma década com centenas de arrematações e milhões
                de reais investidos no mercado de moedas. Esse passo a passo
                <br /> <br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
                  super detalhado e simples de entender, pode te trazer uma alta
                  lucratividade já nas próximas semanas.
                </span>
              </span>
            </p>
          </div>
        </div>
        <div className="mb-4 md:ml-4">
          <div className="w-1/2 flex py-5 flex-col items-center">
            <h1>Olha</h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="px-4 py-10 xs:py-10 xs:px-2 bg-btnColor1 border border-btnColor1 rounded-lg shadow bg-gradient-to-r from-cardColor to-bodyColor hover:from-bodyColor hover:to-cardColor"
            >
              <p className="mb-2 text-2xl font-semibold font-bodyFont -tracking-wide text-center">
                Não sabe nada sobre o mercado de cripto:
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="px-4 py-10 xs:py-10 xs:px-2 mt-2 bg-btnColor1 border border-btnColor1 rounded-lg shadow bg-gradient-to-r from-cardColor to-bodyColor hover:from-bodyColor hover:to-cardColor"
            >
              <p className="mb-2 text-2xl font-semibold font-bodyFont -tracking-wide text-center">
                Está buscando uma forma segura e rentável de investir o seu
                dinheiro:
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="px-4 py-10 xs:py-10 xs:px-2 mt-2 bg-btnColor1 border border-btnColor1 rounded-lg shadow bg-gradient-to-r from-cardColor to-bodyColor hover:from-bodyColor hover:to-cardColor"
            >
              <p className="mb-2 text-2xl font-semibold font-bodyFont -tracking-wide text-center">
                Não tem muito dinheiro, mas gostaria de investir:
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="px-4 py-10 xs:py-10 xs:px-2 mt-2 bg-btnColor1 border border-btnColor1 rounded-lg shadow bg-gradient-to-r from-cardColor to-bodyColor hover:from-bodyColor hover:to-cardColor"
            >
              <p className="mb-2 text-2xl font-semibold font-bodyFont -tracking-wide text-center">
                Quer investir em poupança de criptomoedas:
              </p>
            </motion.div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default ThirdContainer;

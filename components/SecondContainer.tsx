import { motion } from "framer-motion";

const SecondContainer = () => {
  return (
    <section className="w-full mx-auto py-10 mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
      <div className="w-10/12 -mb-10 -mt-10">
        <h2 className="lg:text-4xl md:text-4xl xm:pt-5 sm:pt-5 font-titleFont font-bold tracking-wide text-center uppercase xs:mt-5">
          AO FINAL DAS 9 ETAPAS VOCÊ SERÁ CAPAZ DE:
        </h2>
        <div className="flex">
          <div className="w-1/2 flex py-5 flex-col items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="block max-w-sm px-20 p-4 bg-btnColor1 border border-btnColor1 rounded-lg shadow bg-gradient-to-r from-cardColor to-bodyColor hover:from-bodyColor hover:to-cardColor sm:px-0 xs:px-0 xs:mr-1 sm:mr-1 xs:pb-10 sm:pb-16 md:pb-16"
            >
              <p className="mb-2 text-2xl xs:text-base sm:text-base xs:px-2 font-semibold font-bodyFont tracking-tight text-center md:text-lg lg:text-2xl">
                Entender como funcionam as criptomoedas, Binance e carteiras.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="max-w-sm px-20 p-4 mt-5 bg-btnColor1 border border-btnColor1 rounded-lg shadow bg-gradient-to-r from-cardColor to-bodyColor hover:from-bodyColor hover:to-cardColor sm:px-0 xs:px-0 xs:mr-1 sm:mr-1 sm:pb-10 xs:pb-10"
            >
              <p className="mb-2 text-2xl xs:text-base sm:text-base xs:px-2 font-semibold font-bodyFont tracking-tight text-center md:text-lg md:px-14 lg:text-2xl">
                Criar uma nova fonte de renda extra.
              </p>
            </motion.div>
          </div>
          <div className="w-1/2 flex py-5 flex-col items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="max-w-sm px-20 p-4 bg-btnColor1 border border-btnColor1 rounded-lg shadow bg-gradient-to-r from-cardColor to-bodyColor hover:from-bodyColor hover:to-cardColor sm:px-0 xs:px-0 sm:ml-1 xs:ml-1 sm:pb-10 md:pb-10"
            >
              <p className="mb-2 text-2xl xs:text-base sm:text-base xs:px-2 font-semibold font-bodyFont tracking-tight text-center xs:pb-6 sm:pb-6 md:text-lg lg:text-2xl">
                Executar uma estratégia que te gera muito lucro com a Binance.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="max-w-sm px-20 p-4 mt-5 bg-btnColor1 border border-btnColor1 rounded-lg shadow bg-gradient-to-r from-cardColor to-bodyColor hover:from-bodyColor hover:to-cardColor sm:px-0 xs:px-0 xs:mr-1 sm:mr-1 xs:pb-10 lg:pb-16"
            >
              <p className="mb-2 text-2xl xs:text-base sm:text-base xs:px-2 font-semibold font-bodyFont tracking-tight text-center md:text-lg md:px-14 lg:text-2xl">
                Se tornar um consultor de cripto.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-2/5 h-14 my-10 text-sm font-titleFont rounded-md text-textGreen tracking-wide bg-gradient-to-r from-btnColor1 to-btnColor2 hover:from-btnColor2 hover:to-btnColor1 font-bold py-2 px-4 animate-bounce border shadow-md shadow-btnColor1 xs:h-20"
      >
        QUERO LUCRAR COM CRIPTO
      </motion.button>
    </section>
  );
};

export default SecondContainer;

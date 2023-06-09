import { motion } from "framer-motion";

const FirstContainer = () => {
  return (
    <section className="w-full mx-auto py-10 mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4 bg-gradient-to-r from-btnColor1 to-btnColor2 transition-300 shadow-2xl">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="w-10/12 my-10"
      >
        <h2 className="font-titleFont font-bold tracking-wide text-center uppercase xs:text-lg sm:text-lg md:text-4xl lg:text-4xl xs:pt-5 sm:pt-5">
          Um treinamento prático para aprender a investir com tudo em cripto.
        </h2>
        <h2 className="text-4xl font-titleFont tracking-wide text-center mt-4 xs:text-lg sm:text-lg md:text-4xl lg:text-4xl xs:pb-5 sm:pb-5">
          Não importa se você irá começar com <br />{" "}
          <span className="bg-black">
            100 reais, 1.000 reais ou com 100.000 reais.
          </span>
        </h2>
      </motion.div>
    </section>
  );
};

export default FirstContainer;

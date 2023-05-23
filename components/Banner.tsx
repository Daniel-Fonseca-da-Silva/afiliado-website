import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 xs:items-center sm:items-center md:items-center lg:items-start lgl:items-start xl:items-start"
    >
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="text-2xl lg:ml-10 xs:text-xl sm:text-xl font-titleFont font-bold tracking-wide"
      >
        MÉTODO
      </motion.p>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="lg:text-8xl xs:text-4xl sm:text-4xl -mt-14 font-titleFont font-bold tracking-wide bg-gradient-to-r from-btnColor1 to-btnColor2 text-transparent bg-clip-text xs:-mt-12 sm:-mt-12 sm:pt-7 md:pt-7 lg:pt-3 lgl:pt-3 xl:pt-3"
      >
        CVL
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="lg:text-4xl font-bodyFont font-bold tracking-wide -mt-5 md:px-0 lg:px-0"
      >
        Aprenda na prática a comprar, <br /> vender e{" "}
        <span className="bg-gradient-to-r from-btnYellowGradient to-btnColor2 text-transparent bg-clip-text text-center">
          enriquecer com <br /> segurança
        </span>{" "}
        em criptomoedas
      </motion.p>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="lg:text-3xl font-bodyFont tracking-wide font-light -mt-5 xs:pt-2 sm:pt-2 md:px-0 lg:px-0"
      >
        Agora você poderá ter acesso ao método <br /> desenvolvido após{" "}
        <span className="text-textOrangeLight">mais de uma década</span> <br />{" "}
        e{" "}
        <span className="text-textOrangeStrong">centenas de arrematações.</span>
      </motion.p>
      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-2/5 h-14 text-sm font-titleFont rounded-md text-textGreen tracking-wide bg-gradient-to-r from-btnColor1 to-btnColor2 hover:from-btnColor2 hover:to-btnColor1 font-bold py-2 px-4 animate-bounce border shadow-md shadow-btnColor1 xs:text-sm xs:h-20 xs:mt-5"
      >
        QUERO LUCRAR COM CRIPTO
      </motion.button>
    </section>
  );
};

export default Banner;

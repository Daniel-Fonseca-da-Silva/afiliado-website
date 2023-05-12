import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="text-2xl ml-10 font-titleFont font-bold tracking-wide"
      >
        MÉTODO
      </motion.p>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-8xl -mt-10 font-titleFont font-bold tracking-wide text-textOrangeStrong"
      >
        CVL
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-4xl font-bodyFont font-bold tracking-wide -mt-5"
      >
        Aprenda na prática a comprar, <br /> vender e{" "}
        <span className="text-textOrangeLight">
          enriquecer com <br /> segurança
        </span>{" "}
        em criptomoedas
      </motion.p>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-3xl font-bodyFont tracking-wide font-light -mt-5"
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
        className="w-2/5 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide bg-gradient-to-r from-btnColor1 to-btnColor2 hover:from-btnColor2 hover:to-btnColor1 font-bold py-2 px-4 animate-bounce"
      >
        QUERO LUCRAR COM CRIPTO
      </motion.button>
    </section>
  );
};

export default Banner;

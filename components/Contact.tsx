import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="w-full mx-auto py-10 mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4 bg-gradient-to-r from-btnColor1 to-btnColor2 transition-300 shadow-2xl">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="w-10/12 my-10"
      >
        <div className="flex flex-col items-center">
          <h2 className="xs:text-lg sm:text-lg md:text-4xl lg:text-4xl font-titleFont font-bold tracking-wide text-center uppercase">
            Ainda em dúvida sobre o MÉTODO?
          </h2>
          <p className="xs:text-base sm:text-base md:text-lg lg:text-xl font-bodyFont tracking-wider py-6">
            Nossa equipe está disponível para te ajudar.
          </p>
          <button className="w-2/5 h-14 text-sm font-titleFont rounded-md text-textGreen tracking-wide bg-gradient-to-r from-btnGreen to-btnGreen hover:from-btnColor2 hover:to-btnfrom-btnGreen font-bold py-2 px-4 animate-bounce border shadow-md shadow-btnGreen uppercase xs:text-sm xs:h-20 xs:mt-5">
            quero começar agora
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

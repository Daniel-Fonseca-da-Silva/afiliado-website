import { metodocvl } from "@/public/assets";
import { motion } from "framer-motion";
import Image from "next/image";

const FourthContainer = () => {
  return (
    <section className="w-full mx-auto py-10 mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
      <div className="w-10/12 -mb-10 -mt-10">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image className="w-full" src={metodocvl} alt="Criptomoedas" />
            </motion.div>
          </div>
          <div className="xs:pl-0 sm:pl-0 md:pl-10 lg:pl-32 xs:py-10 sm:py-10 md:py-0 sm:text-center">
            <p className="lg:text-4xl xs:text-base sm:text-xl font-bodyFont tracking-wide leading-normal">
              <span className="font-bold">O Método CVL</span> pode te ajudar a
              iniciar nesse mercado com um plano detalhado para comprar tudo na
              Binance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthContainer;

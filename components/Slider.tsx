import { depo1, depo2 } from "@/public/assets";
import Image from "next/image";

const Slider = () => {
  return (
    <section className="w-full mx-auto mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
      <div className="w-10/12 my-10 flex flex-col items-center">
        <h2 className="lg:text-4xl xs:text-base sm:text-xl font-bodyFont font-bold tracking-wide text-center uppercase">
          TESTADO POR MAIS DE{" "}
          <span className="bg-btnColor2">2.500 PESSOAS!</span>
        </h2>
        <p className="lg:text-2xl xs:text-base sm:text-lg font-bodyFont tracking-wide text-center mt-4">
          Existe um seleto grupo de pessoas{" "}
          <span className="underline">aproveitando as oportunidades</span> de
          faturar com leilões e criar uma nova fonte de renda.
        </p>

        <div
          id="gallery"
          className="relative w-full mt-5"
          data-carousel="slide"
        >
          {/* <!-- Carousel wrapper --> */}
          <div className="relative h-screen overflow-hidden rounded-lg md:h-96">
            {/* <!-- Item 1 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <Image
                className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                src={depo1}
                alt="Depoimento um"
              />
            </div>
            {/* <!-- Item 2 --> */}
            {/* <!-- Item 1 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <Image
                className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                src={depo2}
                alt="Depoimento dois"
              />
            </div>
          </div>
          {/* <!-- Slider controls --> */}
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-white dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span className="sr-only">Anterior</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-white dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="sr-only">Próximo</span>
            </span>
          </button>
        </div>
      </div>
      <div className="w-1/5 border border-t border-gray-700"></div>
    </section>
  );
};

export default Slider;

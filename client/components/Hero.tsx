import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative bg-[#f5c8b8] text-[#263238] text-center overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-4xl mt-15 md:text-5xl font-extrabold mb-10">
          Predicción de Riesgo de Burnout
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <p className="text-lg md:text-xl text-[#455a64] max-w-md text-left">
            Evaluá tu nivel de agotamiento digital y emocional basado en tus hábitos.
          </p>

          <Image
            src="/headache-woman-svgrepo-com.svg"
            alt="Mujer con dolor de cabeza"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full  leading-[0] h-75">
        <svg
          className="relative block w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0 0 C 300 100 900 0 1200 100 L1200 120 L0 120 Z"
            fill="#eceff1"
          />
        </svg>
      </div>
    </div>
  );
}


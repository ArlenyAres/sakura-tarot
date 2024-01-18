import React from "react";
import Image from "next/image";
import past from "../../../public/assets/past-icon.png";
import present from "../../../public/assets/present-icon.png";
import future from "../../../public/assets/present-icon.png";


const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-beige">
        <button className="w-40 h-14 px-12 py-2.5 bg-purple-dark rounded-3xl flex justify-center items-center text-beige mb-6">
          Revelar
        </button>
      </div>
      <div className="flex items-center justify-center min-h-[70vh] bg-purple-medium pb-10">
        <div className="text-center">
          <div className="flex flex-col items-center pt-24 w-52 h-96 bg-beige rounded-3xl border-dashed border-4 border-purple-dark text-purple-text mt-10 mb-4">
            <Image
              src={past}
              alt="botella icono del pasado"
              width={120}
              height={120}
              className="rounded-full mb-4"
            />
          </div>
          <p>PASADO</p>

          <div className="flex flex-col items-center pt-[70px] w-52 h-96 bg-beige rounded-3xl border-dashed border-4 border-purple-dark text-purple-text mt-10 mb-4">
            <Image
              src={present}
              alt="reloj de arena icono del presente"
              width={96}
              height={96}
              className="rounded-full mb-4"
            />
          </div>
          <p>PRESENTE</p>
          <div className="flex flex-col items-center pt-24 w-52 h-96 bg-beige rounded-3xl border-dashed border-4 border-purple-dark mt-4 mb-4">
            <Image
              src={future}
              alt="ojo icono del futuro"
              width={96}
              height={96}
              className="rounded-full mb-4"
            />
          </div>
          <p>FUTURO</p>
        </div>
      </div>
    </>
  );
};

export default Home;

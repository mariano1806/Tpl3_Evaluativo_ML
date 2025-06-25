'use client'
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" left-0 w-full bg-[#f0ebf8]/80 flex justify-center  hover:shadow-black hover:shadow-2xl shadow z-50">
      <div className=" px-6 py-4  items-center">
        <div className=" md:flex space-x-6 items-center">
          <Link className="hover:bg-pink-300 hover:shadow-black px-4 hover:shadow-2xl rounded-2xl cursor-pointer p-1.5" href="/">Predicciones</Link>
          <Link className="hover:bg-pink-300  rounded-2xl cursor-pointer px-4  hover:shadow-black  p-1.5 hover:shadow-2xl" href="/metricas">Metricas</Link>
        </div>
      </div>
    </nav>
  );
}


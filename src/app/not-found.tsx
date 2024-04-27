"use client";
import { useParticlesContext } from "@/context/particles-provider";
import { Particles } from "@tsparticles/react";
import Link from "next/link";
import Image from "next/image";
import not404 from "../assets/not404.svg";

export default function NotFound() {
  const { particlesLoaded, particlesOptions }: any = useParticlesContext();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
      <Particles particlesLoaded={particlesLoaded} options={particlesOptions} />

      <div className="flex flex-col items-center">
        <Image src={not404} alt="not-found" height={300} width={300} className="mb-3"/>
        <div className="flex flex-col gap-y-3 items-center">
          <h2 className="text-center font-semibold text-3xl text-[#4285f4]">Nenhum resultado encontrado.</h2>

          <Link href="/" className="bg-[#4285f4] py-3 w-36 rounded-md font-semibold text-md text-white text-center">Voltar</Link>
          

        </div>
        </div>


    </div>
  );
}

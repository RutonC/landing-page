"use client"
import Particles from "@tsparticles/react";
import { useParticlesContext } from "@/context/particles-provider";
import Loading from "./loading";

export default function Home() {
  const {particlesLoaded,particlesOptions}:any = useParticlesContext();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      <Particles
      id="tsparticles"
      options={particlesOptions}
      particlesLoaded={particlesLoaded}
      />
      <div className="flex flex-col bg-back rounded-md backdrop-blur-xl p-12 bg-opacity-40">
        <h1 className="text-white font-extrabold text-5xl text-center">Bem-vindo a RutonCode</h1>
        <p className="text-slate-300 text-center text-md text-md mt-3">Em breve teremos novidades!</p>
      </div>
    </main>
  );
}

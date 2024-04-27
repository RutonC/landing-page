"use client";
import React, { useContext, useState, useEffect } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { type Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { particlesOptions } from "@/utils/particles-options";
import Loading from "@/app/loading";

type ParticlesProviderPros = {
  children: React.ReactNode;
  particlesLoaded: any;
};

export const ParticlesContext = React.createContext({});

export default function ParticlesProvider(props: any) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    let timer:any;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      // await loadPolygonMaskPlugin(engine)
    }).then(() => {
     timer = setTimeout(()=>{
        setInit(true);
      },2000)
    });

    return () => clearTimeout(timer);
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // console.log(container);
  };

  if (init) {
    return (
      <ParticlesContext.Provider
        value={{
          particlesLoaded,
          particlesOptions,
        }}
      >
        {props.children}
      </ParticlesContext.Provider>
    );
  }

  return (
    <>
        <Loading />
    </>
  );
}

export const useParticlesContext = () => useContext(ParticlesContext);

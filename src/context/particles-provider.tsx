"use client"
import React,{ useCallback, useContext
  , useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  Engine
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { particlesOptions } from "@/utils/particles-options"; 
import {loadPolygonMaskPlugin} from 'tsparticles-plugin-polygon-mask'

type ParticlesProviderPros = {
  children: React.ReactNode;
  particlesLoaded:any
}

export const ParticlesContext = React.createContext({});

export default function ParticlesProvider (props:any){
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      // await loadPolygonMaskPlugin(engine)
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // console.log(container);
  };

  if(init){

    return(
      <ParticlesContext.Provider value={{
        particlesLoaded
      }}
      >
      {props.children}
    </ParticlesContext.Provider>
  )
} 
return <></>
}

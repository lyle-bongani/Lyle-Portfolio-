import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <div className="relative z-10 w-full c-space">
        <HeroText />
      </div>
      <ParallaxBackground />
      <figure className="absolute inset-0 pointer-events-none">
        <Canvas
          camera={{
            position: [0, 1, isMobile ? 4 : isTablet ? 3.5 : 3],
            fov: isMobile ? 75 : 60
          }}
          className="w-full h-full"
        >
          <Suspense fallback={<Loader />}>
            <Float
              speed={1.5}
              rotationIntensity={0.5}
              floatIntensity={0.5}
            >
              <Astronaut
                scale={isMobile ? 0.2 : isTablet ? 0.25 : 0.3}
                position={isMobile ? [0, -1.5, 0] : isTablet ? [0, -1, 0] : [0, -0.5, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={isMobile ? 0.4 : 0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={isMobile ? 1.5 : 1}
        castShadow={!isMobile}
        shadow-mapSize={isMobile ? 512 : 1024}
      />
      <pointLight intensity={isMobile ? 1.5 : 1} />
      <ambientLight intensity={isMobile ? 0.5 : 0.2} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.35 : 0.75} // Much smaller on mobile
        position={isMobile ? [0, -1.5, 0] : [0, -3.25, -1.5]} // Centered and closer on mobile
        rotation={isMobile ? [0, 0, 0] : [-0.01, -0.2, -0.1]} // No initial rotation on mobile (auto-rotate handles it)
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size - using 768px for better tablet/mobile detection
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='always'
      shadows={!isMobile}
      dpr={[1, isMobile ? 1 : 2]}
      camera={{ 
        position: isMobile ? [0, 0, 5] : [20, 3, 5], 
        fov: isMobile ? 50 : 25 
      }}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: !isMobile,
        powerPreference: isMobile ? "low-power" : "high-performance",
        alpha: true,
        premultipliedAlpha: false
      }}
      onCreated={({ scene, gl }) => {
        scene.background = null;
        if (isMobile) {
          gl.setClearColor(0x000000, 0); // Fully transparent on mobile
          gl.domElement.style.backgroundColor = 'transparent';
          gl.domElement.style.background = 'transparent';
        }
      }}
      style={{ 
        background: 'transparent',
        backgroundColor: 'transparent',
        position: 'relative',
        zIndex: 1
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
          enableRotate={!isMobile} // Disable manual rotation on mobile
          autoRotate={isMobile} // Auto-rotate on mobile
          autoRotateSpeed={isMobile ? 1.5 : 0} // Slow rotation on mobile
          makeDefault
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

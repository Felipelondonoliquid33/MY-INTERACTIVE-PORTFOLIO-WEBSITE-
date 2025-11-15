import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, rotationY = 0 }) => {
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
        scale={isMobile ? 0.48 : 0.75} // More natural on mobile
        position={isMobile ? [0, -0.7, 0] : [0, -3.25, -1.5]} // Lowered a bit for mobile
        rotation={isMobile ? [0, rotationY, 0] : [-0.01, -0.2, -0.1]} // Facing forward on mobile, allow Y rotation
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

  // For perpetual rotation on mobile
  const [rotationY, setRotationY] = useState(0);
  useEffect(() => {
    if (!isMobile) return;
    let frame;
    const animate = () => {
      setRotationY((prev) => prev + 0.01);
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, [isMobile]);

  return (
    <Canvas
      frameloop='always'
      shadows={!isMobile}
      dpr={[1, isMobile ? 1 : 2]}
      camera={{ 
        position: isMobile ? [0, 0, 3.2] : [20, 3, 5], // Pull camera back for mobile
        fov: isMobile ? 35 : 25 // Wider field of view for mobile
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
        {isMobile ? (
          // On mobile, show a perpetually rotating, non-interactive model
          <Computers isMobile={true} rotationY={rotationY} />
        ) : (
          <>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
              enablePan={false}
              enableRotate={true}
              autoRotate={false}
              makeDefault
            />
            <Computers isMobile={false} />
          </>
        )}
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color='#f272c8'
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const SciFiStars = (props) => {
    const ref = useRef();
    // Create a separate layer for sci-fi effect: slightly larger, different color (cyan/electric blue)
    const [sphere] = useState(() => random.inSphere(new Float32Array(1500), { radius: 1.2 }));

    useFrame((state, delta) => {
        // Rotate in a slightly different direction or speed for depth
        ref.current.rotation.x += delta / 15;
        ref.current.rotation.y += delta / 20;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color='#00ffff' // Cyan/Electric Blue for Sci-Fi feel
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};


const StarsCanvas = () => {
    return (
        <div className='w-full h-auto fixed inset-0 z-[-1] pointer-events-none'>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars />
                    <SciFiStars />
                </Suspense>

                <Preload all />
            </Canvas>
        </div>
    );
};

export default StarsCanvas;
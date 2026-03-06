"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Bloom, EffectComposer, Noise, ChromaticAberration } from '@react-three/postprocessing';
import * as THREE from 'three';

const Grid = ({ sensitivity, lineThickness, linesColor, gridScale }) => {
    const meshRef = useRef();

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uColor: { value: new THREE.Color(linesColor) },
            uSensitivity: { value: sensitivity },
            uThickness: { value: lineThickness },
            uScale: { value: gridScale },
        }),
        [linesColor, sensitivity, lineThickness, gridScale]
    );

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
        }
    });

    return (
        <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[100, 100, 1, 1]} />
            <shaderMaterial
                transparent
                uniforms={uniforms}
                vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
                fragmentShader={`
          varying vec2 vUv;
          uniform float uTime;
          uniform vec3 uColor;
          uniform float uSensitivity;
          uniform float uThickness;
          uniform float uScale;

          void main() {
            vec2 grid = abs(fract(vUv * uScale * 10.0 - 0.5) - 0.5) / fwidth(vUv * uScale * 10.0);
            float line = min(grid.x, grid.y);
            float alpha = 1.0 - smoothstep(0.0, uThickness, line);
            
            // Scanning effect
            float scan = smoothstep(uSensitivity, uSensitivity + 0.1, fract(vUv.y - uTime * 0.2));
            
            gl_FragColor = vec4(uColor, alpha * scan);
          }
        `}
            />
        </mesh>
    );
};

const GridScan = ({
    sensitivity = 0.55,
    lineThickness = 1,
    linesColor = "#392e4e",
    gridScale = 0.1,
    scanColor = "#FF9FFC",
    scanOpacity = 0.4,
    enablePost = true,
    bloomIntensity = 0.6,
    chromaticAberration = 0.002,
    noiseIntensity = 0.01
}) => {
    return (
        <div className="w-full h-full absolute inset-0 -z-10 pointer-events-none opacity-50">
            <Canvas camera={{ position: [0, 10, 20], fov: 50 }}>
                <color attach="background" args={['#050505']} />
                <ambientLight intensity={1} />
                <Grid
                    sensitivity={sensitivity}
                    lineThickness={lineThickness}
                    linesColor={linesColor}
                    gridScale={gridScale}
                />

                {enablePost && (
                    <EffectComposer>
                        <Bloom intensity={bloomIntensity} luminanceThreshold={0.2} />
                        <Noise opacity={noiseIntensity} />
                        <ChromaticAberration offset={[chromaticAberration, chromaticAberration]} />
                    </EffectComposer>
                )}
            </Canvas>
        </div>
    );
};

export default GridScan;

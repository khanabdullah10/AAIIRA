'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

interface StoneCube3DProps {
  textureUrl: string;
  isEven?: boolean;
  className?: string;
}

export default function StoneCube3D({
  textureUrl,
  isEven = false,
  className = '',
}: StoneCube3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cubeRef = useRef<THREE.Mesh | null>(null);
  const materialRef = useRef<THREE.MeshPhysicalMaterial | null>(null);
  const textureLoaderRef = useRef<THREE.TextureLoader | null>(null);

  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const userRotationRef = useRef({ x: 0, y: 0 });
  const dragVelocityRef = useRef({ x: 0, y: 0 });
  const isVisibleRef = useRef(false);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const width = container.clientWidth || 240;
    const height = container.clientHeight || 240;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.4);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;

    container.appendChild(renderer.domElement);

    // 2. Texture & Physical Luxury Polished Marble Material
    const loader = new THREE.TextureLoader();
    textureLoaderRef.current = loader;

    const initialTexture = loader.load(textureUrl);
    initialTexture.colorSpace = THREE.SRGBColorSpace;
    initialTexture.wrapS = THREE.RepeatWrapping;
    initialTexture.wrapT = THREE.RepeatWrapping;

    // Luxury high-specular polished Italian stone material with clearcoat sheen
    const material = new THREE.MeshPhysicalMaterial({
      map: initialTexture,
      roughness: 0.14,
      metalness: 0.05,
      clearcoat: 0.95,
      clearcoatRoughness: 0.08,
      reflectivity: 0.95,
    });
    materialRef.current = material;

    // 3. Chamfered Rounded Box Geometry (width: 2.1, height: 2.1, depth: 2.1, segments: 4, radius: 0.09)
    // The subtle rounded chamfer catches rim & specular highlights on all edges!
    const geometry = new RoundedBoxGeometry(2.1, 2.1, 2.1, 4, 0.09);
    const cube = new THREE.Mesh(geometry, material);

    // Initial dramatic isometric orientation showing top, front, and side faces
    const defaultRotX = 0.48;
    const defaultRotY = isEven ? 0.72 : -0.72;
    const defaultRotZ = isEven ? -0.06 : 0.06;

    cube.rotation.set(defaultRotX, defaultRotY, defaultRotZ);
    scene.add(cube);
    cubeRef.current = cube;

    // 4. Studio Lighting Rig for Marble Gleam
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    // Key directional light hitting the top-front-side chamfer
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.8);
    keyLight.position.set(isEven ? -4 : 5, 7, 5);
    scene.add(keyLight);

    // Rim light highlighting the opposite bevels
    const rimLight = new THREE.DirectionalLight(0xdbeafe, 1.0);
    rimLight.position.set(isEven ? 5 : -5, -3, -4);
    scene.add(rimLight);

    // Overhead fill light
    const topLight = new THREE.DirectionalLight(0xffffff, 0.8);
    topLight.position.set(0, 6, 2);
    scene.add(topLight);

    // 5. Visibility Observer (Pause when offscreen for 0 CPU impact)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 6. Interactive Drag & Spin Handlers
    const handlePointerDown = (e: PointerEvent) => {
      isDraggingRef.current = true;
      setIsInteracting(true);
      dragStartRef.current = { x: e.clientX, y: e.clientY };
      (e.target as HTMLElement)?.setPointerCapture?.(e.pointerId);
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current) return;

      const deltaX = e.clientX - dragStartRef.current.x;
      const deltaY = e.clientY - dragStartRef.current.y;

      userRotationRef.current.y += deltaX * 0.012;
      userRotationRef.current.x += deltaY * 0.012;

      dragVelocityRef.current = {
        x: deltaY * 0.003,
        y: deltaX * 0.003,
      };

      dragStartRef.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = (e: PointerEvent) => {
      isDraggingRef.current = false;
      setIsInteracting(false);
      try {
        (e.target as HTMLElement)?.releasePointerCapture?.(e.pointerId);
      } catch {}
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    // 7. Render Loop with Organic Isometric Floating & Inertial Dampening
    let reqId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);

      if (!isVisibleRef.current || !cubeRef.current || document.hidden) return;

      const elapsedTime = clock.getElapsedTime();

      if (isDraggingRef.current) {
        // Direct interactive user rotation
        cubeRef.current.rotation.x = defaultRotX + userRotationRef.current.x;
        cubeRef.current.rotation.y = defaultRotY + userRotationRef.current.y;
      } else {
        // Apply remaining drag velocity with smooth friction
        userRotationRef.current.x += dragVelocityRef.current.x;
        userRotationRef.current.y += dragVelocityRef.current.y;
        dragVelocityRef.current.x *= 0.92;
        dragVelocityRef.current.y *= 0.92;

        // Smoothly ease user rotation back towards 0 so the cube always returns to its dramatic hero angle
        userRotationRef.current.x += (0 - userRotationRef.current.x) * 0.02;
        userRotationRef.current.y += (0 - userRotationRef.current.y) * 0.02;

        // Organic levitation & subtle breathing sway around the isometric sweet spot
        const floatX = Math.sin(elapsedTime * 1.2) * 0.06;
        const floatY = Math.cos(elapsedTime * 0.9) * 0.09;
        const floatZ = Math.sin(elapsedTime * 0.7) * 0.03;

        cubeRef.current.rotation.x = defaultRotX + userRotationRef.current.x + floatX;
        cubeRef.current.rotation.y = defaultRotY + userRotationRef.current.y + floatY;
        cubeRef.current.rotation.z = defaultRotZ + floatZ;

        // Subtle vertical levitation bob
        cubeRef.current.position.y = Math.sin(elapsedTime * 1.5) * 0.1;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 8. Resize Observer for exact responsive canvas dimensions
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        if (w > 0 && h > 0 && rendererRef.current) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          rendererRef.current.setSize(w, h);
        }
      }
    });
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(reqId);
      observer.disconnect();
      resizeObserver.disconnect();
      domElement.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);

      if (container.contains(domElement)) {
        container.removeChild(domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [isEven]);

  // Dynamically update texture on the 3D cube when swatch changes
  useEffect(() => {
    if (!materialRef.current || !textureLoaderRef.current) return;

    textureLoaderRef.current.load(textureUrl, (loadedTex) => {
      loadedTex.colorSpace = THREE.SRGBColorSpace;
      loadedTex.wrapS = THREE.RepeatWrapping;
      loadedTex.wrapT = THREE.RepeatWrapping;
      if (materialRef.current) {
        materialRef.current.map = loadedTex;
        materialRef.current.needsUpdate = true;
      }
    });
  }, [textureUrl]);

  return (
    <div
      className={`relative select-none group/cube ${className}`}
      style={{ touchAction: 'none' }}
    >
      {/* 3D WebGL Canvas Container */}
      <div
        ref={mountRef}
        className={`w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 cursor-grab active:cursor-grabbing transition-transform duration-300 ${
          isInteracting ? 'scale-105' : 'hover:scale-105'
        }`}
        title="Interactive 3D Stone Cube — Drag to Rotate"
      />

      {/* Realistic Ground Ambient Drop Shadow */}
      <div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 sm:w-44 md:w-52 h-8 rounded-full pointer-events-none opacity-50 blur-lg transition-all duration-300 group-hover/cube:opacity-75 group-hover/cube:scale-105"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.25) 45%, rgba(0, 0, 0, 0) 75%)',
        }}
      />

      {/* Floating 3D Interaction Pill Cue */}
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none px-2.5 py-0.5 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-white text-[9px] font-extended uppercase tracking-wider whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 shadow-xl ${
          isInteracting ? 'opacity-100 scale-105' : 'opacity-70 group-hover/cube:opacity-100'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>3D Strata Cube • Drag to Rotate</span>
      </div>
    </div>
  );
}

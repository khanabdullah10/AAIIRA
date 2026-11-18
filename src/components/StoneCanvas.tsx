'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

interface VoronCell {
  mesh: THREE.Mesh;
  noize: number;
  origin: THREE.Vector3;
  to: THREE.Vector3;
  rot: THREE.Vector3;
}

export default function StoneCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const torchCursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // --- THREE.JS SCENE SETUP ---
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 12);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // --- 4-WAY QUADRANT MIRRORED MARBLE TEXTURE (Exact Stone & Style technique) ---
    // Creates seamless high-contrast veined marble without seam artifacts
    let rockTexture: THREE.Texture = new THREE.Texture();
    const coreMaterial = new THREE.MeshStandardMaterial({
      roughness: 0.5,
      metalness: 0.4,
      bumpScale: -0.005,
    });
    const voronMaterial = new THREE.MeshStandardMaterial({
      roughness: 0.85,
      metalness: 0.3,
      bumpScale: -0.05,
    });

    const imageLoader = new THREE.ImageLoader();
    let isDisposed = false;

    // --- STUDIO LIGHTING (Matching Stone & Style spotlight setup) ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keySpot = new THREE.SpotLight(0xfff8f0, 2.5);
    keySpot.position.set(-10, 90, 50);
    keySpot.angle = 0.15;
    keySpot.penumbra = 1.0;
    scene.add(keySpot);

    const mouseLight1 = new THREE.SpotLight(0xffffff, 8.0);
    mouseLight1.position.set(0, 0, 100);
    mouseLight1.angle = 0.03;
    mouseLight1.penumbra = 1.0;
    mouseLight1.distance = 150;
    scene.add(mouseLight1);

    const mouseLight2 = new THREE.SpotLight(0x7fb5ff, 2.0);
    mouseLight2.position.set(0, 0, 200);
    mouseLight2.angle = 0.06;
    mouseLight2.penumbra = 1.0;
    scene.add(mouseLight2);

    const rimLight = new THREE.DirectionalLight(0xa5c4ff, 1.8);
    rimLight.position.set(-8, -5, -6);
    scene.add(rimLight);

    // Dedicated contact illumination for the settled cube face
    const contactLight = new THREE.DirectionalLight(0xffffff, 0);
    contactLight.position.set(0, 3, 10);
    scene.add(contactLight);

    // --- INTERACTIVE HOVER FLASHLIGHT / TORCH SYSTEM (High Performance) ---
    const torchSpot = new THREE.SpotLight(0xffffff, 0, 40, Math.PI / 10, 0.9, 1.2);
    torchSpot.position.set(0, 0, 8);
    scene.add(torchSpot);
    scene.add(torchSpot.target);

    const torchFlash = new THREE.PointLight(0xfff8f0, 0, 18, 1.4);
    torchFlash.position.set(0, 0, 4);
    scene.add(torchFlash);

    const raycaster = new THREE.Raycaster();
    const mouseNDC = new THREE.Vector2(-999, -999);
    let isHovered = false;
    let hoverIntensity = 0;
    let flashBurst = 0;
    let hasMouseMoved = false;

    // --- MAIN STONE CONTAINER GROUP ---
    // In Stone & Style, the stone is HORIZONTALLY CENTERED (x = 0) throughout the site!
    const stoneMasterGroup = new THREE.Group();
    stoneMasterGroup.position.set(0, 0, 0);
    scene.add(stoneMasterGroup);

    // Lightweight invisible proxy box for 60fps ultra-fast raycasting (0 microsecond cost)
    const hitProxy = new THREE.Mesh(
      new THREE.BoxGeometry(3.2, 6.8, 3.2),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    stoneMasterGroup.add(hitProxy);

    const voronGroup = new THREE.Group();
    stoneMasterGroup.add(voronGroup);

    let coreMesh: THREE.Mesh | null = null;
    const voronCells: VoronCell[] = [];

    // --- DEFERRED ASSET LOADING (Yields main thread to Hero kinetic logo intro) ---
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/');

    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    const loadAssetsTimer = setTimeout(() => {
      if (isDisposed) return;

      // 1. Mirrored quadrant texture
      imageLoader.load(
        '/assets/stonestyle_rock.jpg',
        (img) => {
          if (isDisposed) return;
          const canvas = document.createElement('canvas');
          canvas.width = 2048;
          canvas.height = 1024;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            const hw = canvas.width / 2;
            const hh = canvas.height / 2;

            // Q1: Top-left
            ctx.drawImage(img, 0, 0, hw, hh);

            // Q2: Top-right (flip X)
            ctx.save();
            ctx.translate(canvas.width, 0);
            ctx.scale(-1, 1);
            ctx.drawImage(img, 0, 0, hw, hh);
            ctx.restore();

            // Q3: Bottom-left (flip Y)
            ctx.save();
            ctx.translate(0, canvas.height);
            ctx.scale(1, -1);
            ctx.drawImage(img, 0, 0, hw, hh);
            ctx.restore();

            // Q4: Bottom-right (flip both X & Y)
            ctx.save();
            ctx.translate(canvas.width, canvas.height);
            ctx.scale(-1, -1);
            ctx.drawImage(img, 0, 0, hw, hh);
            ctx.restore();

            rockTexture = new THREE.CanvasTexture(canvas);
            rockTexture.colorSpace = THREE.SRGBColorSpace;
            rockTexture.wrapS = THREE.RepeatWrapping;
            rockTexture.wrapT = THREE.RepeatWrapping;
            rockTexture.offset.set(0.5, 1.0);
            rockTexture.repeat.set(1.0, 2.0);
            rockTexture.needsUpdate = true;

            coreMaterial.map = rockTexture;
            coreMaterial.bumpMap = rockTexture;
            coreMaterial.needsUpdate = true;

            voronMaterial.map = rockTexture;
            voronMaterial.bumpMap = rockTexture;
            voronMaterial.needsUpdate = true;
          }
        },
        undefined,
        (err) => console.warn('Mirrored texture notice:', err)
      );

      // 2. Monolithic core mesh (cube-logo-top.gltf)
      gltfLoader.load(
        '/models/gltf/cube-logo-top.gltf',
        (gltf) => {
          if (isDisposed) return;
          gltf.scene.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              coreMesh = (child as THREE.Mesh).clone();
              coreMesh.material = coreMaterial;
              stoneMasterGroup.add(coreMesh);
            }
          });
        },
        undefined,
        (err) => console.warn('Core GLTF load notice:', err)
      );

      // 3. Split Voronoi cells (split/20.gltf)
      gltfLoader.load(
        '/models/gltf/split/20.gltf',
        (gltf) => {
          if (isDisposed) return;
          gltf.scene.traverse((child) => {
            const mesh = child as THREE.Mesh;
            if (mesh.isMesh && mesh.name !== 'Core' && mesh.name !== 'Core_logo') {
              const clone = mesh.clone();
              clone.material = voronMaterial;

              const originPos = new THREE.Vector3(mesh.position.x, mesh.position.y, mesh.position.z);
              const toPos = new THREE.Vector3(
                mesh.position.x * (1 + Math.random()),
                mesh.position.y * (1 + Math.random()),
                mesh.position.z * (1 + Math.random())
              );
              const rotSpeed = new THREE.Vector3(
                (Math.random() - 0.5) * 3.0,
                (Math.random() - 0.5) * 3.0,
                (Math.random() - 0.5) * 3.0
              );

              voronCells.push({
                mesh: clone,
                noize: Math.random() * 2 - 1,
                origin: originPos,
                to: toPos,
                rot: rotSpeed,
              });

              voronGroup.add(clone);
            }
          });
        },
        undefined,
        (err) => console.warn('Split GLTF load notice:', err)
      );
    }, 180);

    // --- RESPONSIVE SETTINGS ---
    const getResponsiveScale = (w: number) => {
      if (w < 640) return 0.58;
      if (w < 1024) return 0.74;
      return 0.98;
    };
    const baseScale = getResponsiveScale(window.innerWidth);
    stoneMasterGroup.scale.set(baseScale, baseScale, baseScale);

    // --- ZERO-REFLOW DOM OFFSET CACHING ---
    // Pre-measure element positions on mount/resize to eliminate layout thrashing (getBoundingClientRect)
    let footerOffsetTop = 0;
    let anchorOffsetTop = 0;
    let anchorHeight = 96;
    let stageOffsetTop = 0;
    let stageHeight = 0;
    let cachedMaxScroll = 1;

    const measureDOMOffsets = () => {
      const footerEl = document.getElementById('footer-section');
      const anchorEl = document.getElementById('contact-cube-anchor');
      const stageEl = document.getElementById('monolith-stage');

      const sy = window.scrollY || window.pageYOffset;
      if (footerEl) {
        footerOffsetTop = footerEl.getBoundingClientRect().top + sy;
      }
      if (anchorEl) {
        const r = anchorEl.getBoundingClientRect();
        anchorOffsetTop = r.top + sy;
        anchorHeight = r.height || 96;
      }
      if (stageEl) {
        const r = stageEl.getBoundingClientRect();
        stageOffsetTop = r.top + sy;
        stageHeight = r.height || window.innerHeight;
      }
      cachedMaxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    };

    measureDOMOffsets();
    window.addEventListener('resize', measureDOMOffsets, { passive: true });

    // --- MOUSE PARALLAX & CURSOR TRACKING ---
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let mouseClientX = -999;
    let mouseClientY = -999;
    let currentCursorX = -999;
    let currentCursorY = -999;

    const handleMouseMove = (e: MouseEvent) => {
      mouseClientX = e.clientX;
      mouseClientY = e.clientY;
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
      mouseNDC.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseNDC.y = -(e.clientY / window.innerHeight) * 2 + 1;
      hasMouseMoved = true;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Tactile click on stone triggers torch flash burst
    const handleMouseDown = () => {
      if (isHovered) {
        flashBurst = 1.3;
      }
    };
    window.addEventListener('mousedown', handleMouseDown);

    // --- 60FPS SMOOTH INERTIA & PHASING RENDER LOOP ---
    let reqId: number;
    const startTime = performance.now();
    let currentTiltX = 0;
    let currentTiltY = 0;
    let isTorchActive = false;

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) / 1000;

      // Pure direct scroll sync with Lenis: Instant response, zero latency, zero lag
      const scrollY = window.scrollY || window.pageYOffset;
      const maxScroll = cachedMaxScroll || Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1.0, Math.max(0.0, scrollY / maxScroll));

      // Exact Stone & Style sine.in progress curve:
      // fakeScroll.timelines.sine.p = 1 - cos(progress * PI / 2)
      // Keeps the stone standing tall and upright throughout the Hero & Brand sections!
      const n = 1.0 - Math.cos(progress * Math.PI * 0.5);

      // Mouse smoothing
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Mouse tilt parallax
      currentTiltX += (mouse.y * 0.25 - currentTiltX) * 0.08;
      currentTiltY += (mouse.x * 0.25 - currentTiltY) * 0.08;

      // Mouse lights tracking
      const mouseSpeedMult = Math.sin(progress * progress);
      mouseLight1.position.x = 250 * mouse.x;
      mouseLight1.position.y = 250 * mouse.y;
      mouseLight1.intensity = 8.0 - 5.0 * mouseSpeedMult;

      mouseLight2.position.x = 250 * mouse.x;
      mouseLight2.position.y = 250 * mouse.y;

      // Camera zooms slightly from 12.0 down to 10.0 matching Stone & Style
      camera.position.z = 12.0 - 2.0 * n;

      // =========================================================================
      // POSITION & EMERGENCE: Starts BELOW Homepage -> Rises into Monolith -> Settle
      // =========================================================================
      let currentX = 0;
      let currentY = 0;
      let currentScale = baseScale;

      const idleFloat = 0.08 * Math.sin(elapsedTime * 1.8);
      const wh = window.innerHeight;

      // Pure arithmetic footer & anchor coordinates (0 forced reflows!)
      let contactSettleFactor = 0;
      let targetAnchorY = -1.2;
      let isAnchorPastScreen = false;

      if (footerOffsetTop > 0) {
        const footerTopInView = footerOffsetTop - scrollY;
        if (footerTopInView < wh) {
          const distIn = wh - footerTopInView;
          contactSettleFactor = Math.min(1.0, Math.max(0.0, distIn / (wh * 0.75)));

          const anchorCenterInView = anchorOffsetTop + anchorHeight / 2 - scrollY;
          const fovRad = (camera.fov * Math.PI) / 360;
          const halfHeight = Math.tan(fovRad) * camera.position.z;
          targetAnchorY = -(anchorCenterInView / wh - 0.5) * 2 * halfHeight;

          if (anchorOffsetTop + anchorHeight - scrollY < -60) {
            isAnchorPastScreen = true;
          }
        }
      }

      if (progress < 0.03) {
        // HOMEPAGE HERO: Stone starts completely below the screen (unobstructed Hero wordmark)
        currentY = -9.0;
      } else if (progress >= 0.03 && progress < 0.18) {
        // SCROLL OUT OF HERO: Smoothly rises up into the pure Monolith Stage
        const rise = (progress - 0.03) / 0.15;
        const easeRise = rise * rise * (3 - 2 * rise);
        currentY = -9.0 * (1.0 - easeRise) + idleFloat * easeRise;
      } else {
        // IN MONOLITH STAGE & CREATIONS GALLERY: Floating proudly in center in FRONT of screen
        // Smoothly blends down into Contact anchor when footer enters viewport!
        currentY = idleFloat * (1.0 - contactSettleFactor) + targetAnchorY * contactSettleFactor;
        const conciseRatio = 0.44;
        currentScale = baseScale * (1.0 - contactSettleFactor * (1.0 - conciseRatio));
      }

      // Contact lighting setup
      contactLight.intensity = contactSettleFactor * 4.5;
      keySpot.intensity = 2.5 * (1.0 - contactSettleFactor * 0.5);

      // =========================================================================
      // INTERACTIVE HOVER FLASHLIGHT / TORCH RAYCASTING (Strictly in #monolith-stage)
      // Pure arithmetic check (0 forced reflows!)
      // =========================================================================
      const stageTopInView = stageOffsetTop - scrollY;
      const stageBottomInView = stageTopInView + (stageHeight || wh * 2);
      const inMonolithStage = stageTopInView <= wh * 0.4 && stageBottomInView >= wh * 0.3;

      if (hasMouseMoved && inMonolithStage && currentY > -5.0 && contactSettleFactor === 0) {
        hasMouseMoved = false;
        raycaster.setFromCamera(mouseNDC, camera);
        const intersects = raycaster.intersectObject(hitProxy, false);

        if (intersects.length > 0) {
          if (!isHovered) {
            flashBurst = 1.0;
          }
          isHovered = true;
          const hit = intersects[0];
          torchSpot.position.set(hit.point.x, hit.point.y, hit.point.z + 4.5);
          torchSpot.target.position.copy(hit.point);
          torchFlash.position.set(hit.point.x, hit.point.y, hit.point.z + 1.6);
        } else {
          isHovered = false;
        }
      } else if (!inMonolithStage || currentY <= -5.0 || contactSettleFactor > 0) {
        isHovered = false;
      }

      // Smooth hover lerp and flash burst decay
      hoverIntensity += ((isHovered ? 1.0 : 0.0) - hoverIntensity) * 0.18;
      flashBurst += (0.0 - flashBurst) * 0.08;

      const torchVal = hoverIntensity * 12.0 + flashBurst * 9.0;
      torchSpot.intensity = torchVal;
      torchFlash.intensity = torchVal * 1.6;

      // Update custom Torch Cursor overlay (Only touch DOM when state actually transitions)
      if (torchCursorRef.current) {
        const shouldBeActive = isHovered && currentY > -5.0 && inMonolithStage;
        if (shouldBeActive) {
          if (currentCursorX < 0) {
            currentCursorX = mouseClientX;
            currentCursorY = mouseClientY;
          } else {
            currentCursorX += (mouseClientX - currentCursorX) * 0.9;
            currentCursorY += (mouseClientY - currentCursorY) * 0.9;
          }

          if (!isTorchActive) {
            document.body.classList.add('torch-active');
            torchCursorRef.current.style.opacity = '1';
            isTorchActive = true;
          }
          const scale = (1.0 + flashBurst * 0.2).toFixed(3);
          torchCursorRef.current.style.transform = `translate3d(${(currentCursorX - 90).toFixed(1)}px, ${(currentCursorY - 90).toFixed(1)}px, 0) scale(${scale})`;
        } else {
          if (isTorchActive) {
            document.body.classList.remove('torch-active');
            torchCursorRef.current.style.opacity = '0';
            if (currentCursorX > 0) {
              torchCursorRef.current.style.transform = `translate3d(${(currentCursorX - 90).toFixed(1)}px, ${(currentCursorY - 90).toFixed(1)}px, 0) scale(0.3)`;
            }
            isTorchActive = false;
          }
        }
      }

      // =========================================================================
      // EXACT ROTATIONS: Standing Monolith -> Rotates Down -> Settled Top Face
      // In Stone & Style:
      // rotation.x = 90 * n * (PI / 180) + mouseTilt
      // rotation.y = 180 * n * (PI / 180)
      // When n = 0 (top): rotX = 0 (standing straight up vertically!)
      // As scroll proceeds: rotX increases to 90 deg (rotates down flat to viewer!)
      // =========================================================================
      const baseRotX = (Math.PI * 0.5) * n; // 0 rad -> PI/2 rad (90 deg)
      const baseRotY = Math.PI * n;         // 0 rad -> PI rad (180 deg)

      // When settled in Contact, align to exact canonical top face (rotX = 90 deg / 1.5708, rotY = 180 deg / PI)
      const targetContactRotX = 1.5708;
      const targetContactRotY = Math.PI;

      const finalRotX =
        baseRotX * (1.0 - contactSettleFactor) + targetContactRotX * contactSettleFactor + currentTiltX * 0.02;
      const finalRotY =
        baseRotY * (1.0 - contactSettleFactor) + targetContactRotY * contactSettleFactor + currentTiltY * 0.02;
      const finalRotZ = mouse.x * 0.03 * (1.0 - contactSettleFactor);

      // Apply master group transforms
      stoneMasterGroup.position.set(currentX, currentY, 0);
      stoneMasterGroup.scale.set(currentScale, currentScale, currentScale);
      stoneMasterGroup.rotation.set(finalRotX, finalRotY, finalRotZ);
      stoneMasterGroup.visible = !isAnchorPastScreen;

      // =========================================================================
      // CORE MESH SIZING (Concise 1:1:1 symmetric cube in Contact)
      // =========================================================================
      if (coreMesh) {
        coreMesh.visible = true;
        // In Hero/Brand/Materia, height scale is 2.0 (tall standing monolith)
        // In Contact, height smoothly normalizes to 1.0 (true 1:1:1 cube!)
        const coreHeightScale = 2.0 - contactSettleFactor * 1.0;
        coreMesh.scale.set(1.0, coreHeightScale, 1.0);
      }

      // =========================================================================
      // VORONOI FRACTURE & 3D DISPERSION (Exact Stone & Style formula: 2 * n)
      // Height = 13.0, delay = 2.0. The stone stays 100% solid until progress > 0.45!
      // =========================================================================
      if (voronCells.length > 0) {
        const i = 2.0 * n;
        const voronHeight = 13.0; // Exact height constant from Stone & Style
        const exDelay = 2.0;      // Exact delay constant from Stone & Style

        if (contactSettleFactor > 0.02) {
          // In Contact section: Voronoi fragments are completely hidden!
          for (let s = 0; s < voronCells.length; s++) {
            const mesh = voronCells[s].mesh;
            mesh.visible = false;
            mesh.scale.set(0, 0, 0);
            mesh.position.set(0, -999, 0);
          }
        } else {
          // Shard fade-out when transitioning to contact
          const shardFade = contactSettleFactor > 0 ? Math.max(0, 1.0 - contactSettleFactor * 2.0) : 1.0;

          for (let s = 0; s < voronCells.length; s++) {
            const item = voronCells[s];
            const mesh = item.mesh;
            mesh.visible = true;
            mesh.scale.set(shardFade, shardFade, shardFade);

            // Normalized height calculation: bottom pieces detach first!
            const nNorm = Math.min(1.0 - Math.abs(item.origin.y / voronHeight - 0.5), 1.0);
            // With delay = 2.0, (i - nNorm * 2.0) <= 0 throughout Hero and Brand (progress < 0.45)
            // Hence a = 0 and pieces remain perfectly locked into the solid monolithic rock!
            const a = Math.sin(Math.max(i - nNorm * exDelay, 0));

            const floatNoise = Math.sin(elapsedTime * 1.8 + s) * item.noize * a;
            const dist = Math.sqrt(
              mesh.position.x * mesh.position.x +
              mesh.position.y * mesh.position.y +
              mesh.position.z * mesh.position.z
            );

            // 3D Dispersion outward matching Stone & Style ex.far: { x: 12, y: 4, z: 8 }
            mesh.position.x = item.origin.x + a * a * item.to.x * 12.0;
            mesh.position.y = floatNoise * dist * 0.1 + item.origin.y + a * a * item.to.y * 4.0;
            mesh.position.z = item.origin.z + a * a * item.to.z * 8.0;

            // Rotation of individual shards
            mesh.rotation.x = item.rot.x * a * 0.3;
            mesh.rotation.y = item.rot.y * a * 0.3;
            mesh.rotation.z = item.rot.z * a * 0.3;
          }
        }
      }

      if (!isAnchorPastScreen && !document.hidden) {
        renderer.render(scene, camera);
      }
    };

    animate();

    // --- RESIZE HANDLER ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      const newScale = getResponsiveScale(window.innerWidth);
      stoneMasterGroup.scale.set(newScale, newScale, newScale);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      isDisposed = true;
      clearTimeout(loadAssetsTimer);
      cancelAnimationFrame(reqId);
      document.body.classList.remove('torch-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', measureDOMOffsets);
      renderer.dispose();
      dracoLoader.dispose();
      rockTexture.dispose();
      coreMaterial.dispose();
      voronMaterial.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={mountRef}
        className="fixed inset-0 pointer-events-none z-20"
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 20,
        }}
        aria-hidden="true"
      />

      {/* Interactive Flashlight / Torch Cursor Overlay */}
      <div
        ref={torchCursorRef}
        className="fixed top-0 left-0 w-[180px] h-[180px] pointer-events-none z-[9999] transition-opacity duration-150 select-none opacity-0"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '180px',
          height: '180px',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform, opacity',
        }}
        aria-hidden="true"
      >
        <svg
          width="180"
          height="180"
          viewBox="-90 -90 180 180"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          <defs>
            <radialGradient id="hotspotGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="scale(60)">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="20%" stopColor="#e0f2fe" stopOpacity="0.8" />
              <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="75%" stopColor="#0284c7" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="beamGrad" x1="0" y1="0" x2="0" y2="-85" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#bae6fd" stopOpacity="0.6" />
              <stop offset="65%" stopColor="#38bdf8" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="bodyMetal" x1="-1" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#323238" />
              <stop offset="30%" stopColor="#555560" />
              <stop offset="50%" stopColor="#828290" />
              <stop offset="70%" stopColor="#4a4a55" />
              <stop offset="100%" stopColor="#202025" />
            </linearGradient>

            <linearGradient id="chromeBezel" x1="-1" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#828290" />
              <stop offset="40%" stopColor="#ffffff" />
              <stop offset="65%" stopColor="#f4f4f5" />
              <stop offset="100%" stopColor="#60606a" />
            </linearGradient>

            <filter id="lensGlowFilter" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="torchShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="2" stdDeviation="3.5" floodColor="#000000" floodOpacity="0.9" />
            </filter>
          </defs>

          {/* Torch angled at -45deg pointing to top-left */}
          <g transform="rotate(-45)" filter="url(#torchShadow)">
            {/* Conical light beam */}
            <polygon points="-7,0 7,0 34,-85 -34,-85" fill="url(#beamGrad)" style={{ mixBlendMode: 'screen' }} />

            {/* Concentric subtle light wave rings */}
            <path d="M -20,-58 A 62 62 0 0 1 20,-58" fill="none" stroke="#bae6fd" strokeWidth="1.2" strokeOpacity="0.35" />
            <path d="M -13,-35 A 38 38 0 0 1 13,-35" fill="none" stroke="#e0f2fe" strokeWidth="1.4" strokeOpacity="0.5" />

            {/* Tailcap & Tactical button */}
            <rect x="-4" y="52" width="8" height="8" rx="1.5" fill="#18181b" stroke="#71717a" strokeWidth="0.8" />
            <rect x="-1.8" y="60" width="3.6" height="2.2" rx="1" fill="#09090b" stroke="#3f3f46" strokeWidth="0.5" />

            {/* Main Barrel Grip with High Contrast Titanium */}
            <rect x="-3.5" y="21" width="7" height="31" rx="1" fill="url(#bodyMetal)" stroke="#a1a1aa" strokeWidth="0.8" />

            {/* Knurling Lines on Grip */}
            <line x1="-3" y1="26" x2="3" y2="26" stroke="#ffffff" strokeWidth="0.8" opacity="0.75" />
            <line x1="-3" y1="30" x2="3" y2="30" stroke="#ffffff" strokeWidth="0.8" opacity="0.75" />
            <line x1="-3" y1="34" x2="3" y2="34" stroke="#ffffff" strokeWidth="0.8" opacity="0.75" />
            <line x1="-3" y1="38" x2="3" y2="38" stroke="#ffffff" strokeWidth="0.8" opacity="0.75" />
            <line x1="-3" y1="42" x2="3" y2="42" stroke="#ffffff" strokeWidth="0.8" opacity="0.75" />
            <line x1="-3" y1="46" x2="3" y2="46" stroke="#ffffff" strokeWidth="0.8" opacity="0.75" />

            {/* Stainless steel pocket clip */}
            <path d="M 3.5,24 L 5,24 L 5,44 L 3.5,44" fill="none" stroke="#ffffff" strokeWidth="0.9" />

            {/* Neck Cooling Ribs */}
            <rect x="-4.5" y="14" width="9" height="7" fill="url(#bodyMetal)" stroke="#71717a" strokeWidth="0.6" />
            <line x1="-4.5" y1="16.5" x2="4.5" y2="16.5" stroke="#18181b" strokeWidth="0.8" />
            <line x1="-4.5" y1="18.5" x2="4.5" y2="18.5" stroke="#18181b" strokeWidth="0.8" />

            {/* Flared Head */}
            <polygon points="-6.5,2.5 6.5,2.5 4.8,14 -4.8,14" fill="url(#bodyMetal)" stroke="#a1a1aa" strokeWidth="0.7" />

            {/* Chrome Bezel Ring */}
            <rect x="-7" y="0" width="14" height="3" rx="0.8" fill="url(#chromeBezel)" stroke="#ffffff" strokeWidth="0.6" />

            {/* Optical Reflector Interior */}
            <ellipse cx="0" cy="0.5" rx="5.5" ry="1.8" fill="#0284c7" />

            {/* Intense Glowing Core LED Emitter at (0, 0) */}
            <ellipse cx="0" cy="0" rx="3.5" ry="1.5" fill="#ffffff" filter="url(#lensGlowFilter)" />
            <circle cx="0" cy="0" r="1.5" fill="#ffffff" />
          </g>

          {/* Hotspot radial glow centered at lens (0, 0) */}
          <circle cx="0" cy="0" r="50" fill="url(#hotspotGlow)" style={{ mixBlendMode: 'screen' }} pointerEvents="none" />
        </svg>
      </div>
    </>
  );
}

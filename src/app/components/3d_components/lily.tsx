// components/ThreeScene.tsx
"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene
    const scene = new THREE.Scene();

    const loader = new GLTFLoader();

    loader.load(
      "/mystery-market/3d/forgetme.gltf", // Ensure this path is correct
      function (gltf: any) {
        gltf.scene.traverse((node: any) => {
          if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });
        scene.add(gltf.scene);
      },
      undefined,
      function (error: any) {
        console.error(error);
      }
    );

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = -1; // Adjust this value to zoom in closer to the scene
    // camera.position.set(0, -1, -1); // Adjusted to move the camera down

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable alpha for transparent background
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.shadowMap.enabled = true; // Enable shadow mapping
    mount.appendChild(renderer.domElement);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Enable damping (inertia)
    controls.dampingFactor = 0.25; // Damping factor
    controls.screenSpacePanning = false; // Do not allow panning in screen space
    controls.maxPolarAngle = Math.PI / 2; // Limit vertical rotation

    // Directional Light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true; // Enable shadows for the light
    scene.add(directionalLight);

    // Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Add ambient light
    scene.add(ambientLight);

    // Cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true; // Cube casts shadow
    cube.receiveShadow = true; // Cube receives shadow
    // scene.add(cube);

    // Render loop
    const render = () => {
      controls.update(); // Update controls
      renderer.render(scene, camera);
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      render();
    };
    animate();

    // Cleanup
    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "400px", height: "200px" }} />;
};

export default ThreeScene;
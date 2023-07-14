import "./assets/css/index.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// customer
import { toggleFullscreen } from "./utils/dbclick";

let windowWidth, windowHeight;

const setWindowSize = () => {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
};

setWindowSize();

// 场景、相机、渲染器、控制器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, windowWidth / windowHeight, 0.1, 1000);
camera.position.set(2, 2, 5);
const canvas = document.querySelector("canvas#webgl");
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(windowWidth, windowHeight);

// Thing
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x0ff0ff });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.y = 1;
scene.add(cube);

const planGeometry = new THREE.PlaneGeometry(10, 10);
const planMaterial = new THREE.MeshBasicMaterial({ color: 'gray', side: 2, transparent: true });
const plan = new THREE.Mesh(planGeometry, planMaterial);
plan.rotation.x = Math.PI / 2;
scene.add(plan);

const animate = () => {
  renderer.render(scene, camera);
  controls.update();
  requestAnimationFrame(animate);
};

animate();

// Resize
window.addEventListener("resize", () => {
  setWindowSize();
  renderer.setSize(windowWidth, windowHeight);
  camera.aspect = windowWidth / windowHeight;
  camera.updateProjectionMatrix();
});

//doubleClick
window.addEventListener("dblclick", (e) => {
  if (e.target === canvas) {
    toggleFullscreen(canvas);
  }
});

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const Gatewaybtn = document.querySelector("#Gatewaybtn");

// 1. Créer la scène
const scene = new THREE.Scene();

// 2. Créer une caméra
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 100);

// 3. Créer un renderer (rendu)
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// renderer.classList.add("planet");
renderer.setClearColor(0x000000, 0); // Set background to transparent

// Ajouter OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Ajoute un effet d'inertie
controls.dampingFactor = 0.05;
controls.autoRotate = true;
controls.enableRotate = true;
controls.enableZoom = false; // Désactive le zoom

// 1. Ajouter une lumière
const light = new THREE.PointLight(0xffffff, 10000); // couleur blanche, intensité ajustée
light.position.set(10, 0, 120);
light.castShadow = true; // Permet de générer des ombres
scene.add(light);

// 2. Ajout de la 2eme lumiere
const light2 = new THREE.PointLight(0xffffff, 10000); // couleur blanche, intensité ajustée
light2.position.set(-130, 0, 30);
light2.castShadow = true; // Permet de générer des ombres
scene.add(light2);

const loader = new GLTFLoader();
// Load the first model
let model; // Declare the model variable outside

loader.load('./models/earth/scene.gltf', function (gltf) {
    model = gltf.scene; // Assign the loaded model to the variable
    model.scale.set(15, 15, 15);
    model.position.set(0, -5, 0);
    scene.add(model);
}, undefined, function (error) {
    console.error(error);
});

// 5. Animation
function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Met à jour les contrôles
    renderer.render(scene, camera);
}
animate();

// 6. Ajuster la taille quand on redimensionne
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

Gatewaybtn.addEventListener("click", () => {
    if (model) {
        const targetScale = new THREE.Vector3(2, 2, 2);
        const duration = 1000; // Duration in milliseconds
        const startTime = performance.now();

        function scaleTransition(time) {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);

            model.scale.lerpVectors(model.scale, targetScale, progress);

            if (progress < 1) {
                requestAnimationFrame(scaleTransition);
            }
        }

        requestAnimationFrame(scaleTransition);
    } else {
        console.warn("Model is not loaded yet.");
    }
});

particlesJS("particles-js", { "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 3, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function () { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

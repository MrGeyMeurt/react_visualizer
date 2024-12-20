import * as THREE from 'three';
import gsap from 'gsap';
import { deltaTime } from 'three/tsl';

class Scene {
    constructor() {}
    
    setup(canvas) {
        this.canvas = canvas;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        
        // Instantier la logique three.js
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            75,
            this.width / this.height,
            0.1,
            1000
        );

        this.camera.position.z = 5;

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: false,
        });

        this.renderer.setSize(this.width, this.height);

        this.geometry = new THREE.BoxGeometry(1, 1, 1);
        this.material = new THREE.MeshNormalMaterial();
        this.mesh = new THREE.Mesh(this.geometry, this.material);

        this.scene.add(this.mesh);
        gsap.ticker.add(this.tick);
    }

    tick = (time, deltaTime, frame) => {
        this.renderer.render(this.scene, this.camera);
    };
}

const scene = new Scene();
export default scene;
let scene, camera, renderer, globe;
let targetRotationX = 0;
let targetRotationY = 0;
let currentRotationX = 0;
let currentRotationY = 0;

function initGlobe() {
    // Create scene
    scene = new THREE.Scene();
    
    // Setup camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 6;

    // Setup renderer
    renderer = new THREE.WebGLRenderer({ 
        canvas: document.getElementById('globeCanvas'),
        alpha: true,
        antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // Load textures
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg');
    const bumpMap = textureLoader.load('https://threejs.org/examples/textures/planets/earth_normal_2048.jpg');

    // Create globe with textures
    const geometry = new THREE.SphereGeometry(2, 64, 64);
    const material = new THREE.MeshPhongMaterial({ 
        map: earthTexture,
        bumpMap: bumpMap,
        bumpScale: 0.05,
        shininess: 15,
        opacity: 0.9,
        transparent: true
    });
    globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Adjust lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xffffff, 1);
    pointLight2.position.set(-5, -3, -5);
    scene.add(pointLight2);

    // Add mouse movement handler
    document.addEventListener('mousemove', onMouseMove);

    // Animation loop with smooth rotation
    function animate() {
        requestAnimationFrame(animate);
        
        // Smooth rotation
        currentRotationX += (targetRotationX - currentRotationX) * 0.05;
        currentRotationY += (targetRotationY - currentRotationY) * 0.05;
        
        // Apply rotation
        globe.rotation.x = currentRotationX;
        globe.rotation.y = currentRotationY;
        
        renderer.render(scene, camera);
    }
    animate();

    // Handle window resize
    window.addEventListener('resize', onWindowResize, false);
}

function onMouseMove(event) {
    // Convert mouse position to rotation angles
    targetRotationY = (event.clientX / window.innerWidth - 0.5) * Math.PI;
    targetRotationX = (event.clientY / window.innerHeight - 0.5) * Math.PI * 0.5;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Initialize when document is loaded
document.addEventListener('DOMContentLoaded', initGlobe); 
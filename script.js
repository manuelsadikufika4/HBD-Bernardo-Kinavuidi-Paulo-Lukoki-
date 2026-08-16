// ============================================================
//  THREE.JS — Cena 3D com partículas e icosaedro giratório
// ============================================================
(function() {
    const container = document.getElementById('three-canvas');

    // 1. Cena, câmara, renderizador
    const scene = new THREE.Scene();
    scene.background = null; // transparente

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Luzes
    const ambientLight = new THREE.AmbientLight(0x404060);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffeedd, 1.2);
    dirLight.position.set(1, 2, 3);
    scene.add(dirLight);

    const backLight = new THREE.DirectionalLight(0x4466ff, 0.6);
    backLight.position.set(-2, -1, -3);
    scene.add(backLight);

    // 3. Objeto central: Icosaedro com arestas douradas
    const geometry = new THREE.IcosahedronGeometry(1.8, 1);
    const material = new THREE.MeshStandardMaterial({
        color: 0x1a1f3a,
        emissive: 0x332a1a,
        roughness: 0.2,
        metalness: 0.8,
        wireframe: false,
        transparent: true,
        opacity: 0.7,
    });
    const icosaedro = new THREE.Mesh(geometry, material);
    scene.add(icosaedro);

    // Arestas douradas
    const edges = new THREE.EdgesGeometry(geometry);
    const lineMat = new THREE.LineBasicMaterial({ color: 0xffd966, transparent: true, opacity: 0.7 });
    const wireframe = new THREE.LineSegments(edges, lineMat);
    icosaedro.add(wireframe);

    // Pequenos pontos nas vértices (esferas)
    const vertices = geometry.attributes.position.array;
    const dotMat = new THREE.MeshStandardMaterial({ color: 0xffaa55, emissive: 0x442200 });
    const dotGeo = new THREE.SphereGeometry(0.08, 6, 6);
    const positions = [];
    for (let i = 0; i < vertices.length; i += 3) {
        const x = vertices[i],
            y = vertices[i + 1],
            z = vertices[i + 2];
        positions.push(new THREE.Vector3(x, y, z));
    }
    // Remove duplicados (simplificado: pega apenas alguns)
    const unique = [];
    const eps = 0.01;
    positions.forEach(v => {
        if (!unique.some(u => u.distanceTo(v) < eps)) unique.push(v.clone());
    });
    unique.forEach(pos => {
        const dot = new THREE.Mesh(dotGeo, dotMat);
        dot.position.copy(pos);
        icosaedro.add(dot);
    });

    // 4. Partículas ao redor (anel de estrelas)
    const particleCount = 1800;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
        // Distribuição esférica com raio variável
        const radius = 2.8 + Math.random() * 3.2;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);

        particlePos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        particlePos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        particlePos[i * 3 + 2] = radius * Math.cos(phi);

        // Cores: dourado / azul
        const mix = Math.random();
        if (mix < 0.5) {
            colors[i * 3] = 0.9 + 0.1 * Math.random();
            colors[i * 3 + 1] = 0.7 + 0.3 * Math.random();
            colors[i * 3 + 2] = 0.2 + 0.2 * Math.random();
        } else {
            colors[i * 3] = 0.2 + 0.2 * Math.random();
            colors[i * 3 + 1] = 0.5 + 0.4 * Math.random();
            colors[i * 3 + 2] = 0.9 + 0.1 * Math.random();
        }
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
        size: 0.12,
        vertexColors: true,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 5. Anel de torus (efeito extra)
    const ringMat = new THREE.MeshStandardMaterial({
        color: 0xffaa55,
        emissive: 0x442200,
        transparent: true,
        opacity: 0.15,
        wireframe: true
    });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(2.6, 0.04, 16, 60), ringMat);
    ring.rotation.x = Math.PI / 2;
    scene.add(ring);

    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(3.2, 0.02, 16, 60), ringMat);
    ring2.rotation.z = Math.PI / 3;
    ring2.rotation.x = Math.PI / 3;
    scene.add(ring2);

    // 6. Animação
    function animate() {
        const elapsed = performance.now() / 1000;

        // Rotação do icosaedro
        icosaedro.rotation.x += 0.002;
        icosaedro.rotation.y += 0.005;
        icosaedro.rotation.z += 0.001;

        // Rotação das partículas (em torno do eixo Y)
        particles.rotation.y += 0.0004;
        particles.rotation.x = Math.sin(elapsed * 0.05) * 0.05;

        // Anéis
        ring.rotation.z += 0.001;
        ring2.rotation.y += 0.001;
        ring2.rotation.x += 0.001;

        // Movimento suave da câmara (órbita lenta)
        const rad = 8;
        const angle = elapsed * 0.03;
        camera.position.x = rad * Math.sin(angle) * 0.3;
        camera.position.z = rad * Math.cos(angle) * 0.3 + 6;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    animate();

    // 7. Redimensionamento
    window.addEventListener('resize', () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    });

})();

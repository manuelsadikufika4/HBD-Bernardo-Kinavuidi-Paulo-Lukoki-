        // ---------- THREE.JS : FUNDO DE PARTÍCULAS (TECH BLUE) ----------
        (function initParticles() {
            const container = document.getElementById('three-canvas');
            const scene = new THREE.Scene();

            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 35;

            const renderer = new THREE.WebGLRenderer({
                alpha: true,
                antialias: true
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            container.appendChild(renderer.domElement);

            // Geometria das partículas (azul principal)
            const particlesGeometry = new THREE.BufferGeometry();
            const particlesCount = 1800;
            const posArray = new Float32Array(particlesCount * 3);

            for (let i = 0; i < particlesCount * 3; i += 3) {
                posArray[i] = (Math.random() - 0.5) * 80;
                posArray[i + 1] = (Math.random() - 0.5) * 80;
                posArray[i + 2] = (Math.random() - 0.5) * 60;
            }

            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

            // Textura circular
            const canvas = document.createElement('canvas');
            canvas.width = 32;
            canvas.height = 32;
            const ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.arc(16, 16, 14, 0, Math.PI * 2);
            ctx.fillStyle = 'white';
            ctx.shadowColor = '#3b82f6';
            ctx.shadowBlur = 15;
            ctx.fill();

            const particleTexture = new THREE.CanvasTexture(canvas);

            const particlesMaterial = new THREE.PointsMaterial({
                size: 0.3,
                map: particleTexture,
                color: 0x3b82f6,
                transparent: true,
                opacity: 0.8,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });

            const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particlesMesh);

            // Estrelas maiores (ciano / tech glow)
            const bigStarsGeo = new THREE.BufferGeometry();
            const bigCount = 300;
            const bigPos = new Float32Array(bigCount * 3);
            for (let i = 0; i < bigCount * 3; i += 3) {
                bigPos[i] = (Math.random() - 0.5) * 100;
                bigPos[i + 1] = (Math.random() - 0.5) * 100;
                bigPos[i + 2] = (Math.random() - 0.5) * 80 - 10;
            }
            bigStarsGeo.setAttribute('position', new THREE.BufferAttribute(bigPos, 3));
            const bigStarsMat = new THREE.PointsMaterial({
                size: 0.5,
                color: 0x06b6d4,
                transparent: true,
                opacity: 0.5,
                blending: THREE.AdditiveBlending,
                depthWrite: false
            });
            const bigStars = new THREE.Points(bigStarsGeo, bigStarsMat);
            scene.add(bigStars);

            // Mouse tracking
            let mouseX = 0,
                mouseY = 0;
            document.addEventListener('mousemove', (event) => {
                mouseX = (event.clientX / window.innerWidth) * 2 - 1;
                mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
            });

            // Animação
            function animate() {
                requestAnimationFrame(animate);

                // Rotação lenta
                particlesMesh.rotation.x += 0.00015;
                particlesMesh.rotation.y += 0.00025;
                bigStars.rotation.x += 0.0001;
                bigStars.rotation.y += 0.0002;

                // Seguir o mouse
                const targetX = mouseX * 0.3;
                const targetY = mouseY * 0.2;
                particlesMesh.rotation.x += (targetY - particlesMesh.rotation.x) * 0.01;
                particlesMesh.rotation.y += (targetX - particlesMesh.rotation.y) * 0.01;
                bigStars.rotation.x += (targetY - bigStars.rotation.x) * 0.008;
                bigStars.rotation.y += (targetX - bigStars.rotation.y) * 0.008;

                renderer.render(scene, camera);
            }
            animate();

            // Redimensionamento
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        })();

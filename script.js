// تهيئة Particles.js
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js loaded!');
});

// تهيئة AOS
AOS.init({
    duration: 1000,
    once: true,
});

// تهيئة Tilt.js
$('.skill').tilt({
    scale: 1.1,
    glare: true,
    maxGlare: 0.5
});

// تأثير الكتابة
const typed = new Typed('#typed-heading', {
    strings: ["مرحبًا، أنا محمد سويد", "مطور ويب شغوف بالتكنولوجيا"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// تهيئة ScrollReveal
ScrollReveal().reveal('.skill', { delay: 300, distance: '50px', origin: 'bottom' });
ScrollReveal().reveal('.about-content', { delay: 300, distance: '50px', origin: 'left' });
ScrollReveal().reveal('.social-links', { delay: 300, distance: '50px', origin: 'right' });

// إضافة تأثيرات GSAP
gsap.from('header h1', { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
gsap.from('header p', { duration: 1, y: 50, opacity: 0, ease: "power2.out", delay: 0.5 });
gsap.from('.scroll-down', { duration: 1, opacity: 0, ease: "power2.out", delay: 1 });

// إضافة تأثيرات تحويم على الروابط
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, { scale: 1.1, duration: 0.3 });
    });
    link.addEventListener('mouseleave', () => {
        gsap.to(link, { scale: 1, duration: 0.3 });
    });
});

// إضافة أصوات عند النقر
const clickSound = new Howl({
    src: ['click-sound.mp3']
});

document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('click', () => {
        clickSound.play();
    });
});

// تهيئة Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('3d-container').appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// تهيئة Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
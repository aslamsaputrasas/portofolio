// ===== Ripple Interaktif (efek air mengikuti mouse) =====
const canvas = document.getElementById('rippleCanvas');
const ctx = canvas.getContext('2d');
let ripples = [];
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
});

document.addEventListener('mousemove', (e) => {
    ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        alpha: 0.35
    });
});

function draw() {
    ctx.clearRect(0, 0, width, height);
    ripples.forEach((r, i) => {
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 212, 0, ${r.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        r.radius += 1.5;
        r.alpha -= 0.005;

        if (r.alpha <= 0) ripples.splice(i, 1);
    });
    requestAnimationFrame(draw);
}
draw();

// ===== Mobile Menu Logic =====
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

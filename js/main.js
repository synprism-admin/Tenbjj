// ── TENBJJ main.js ──────────────────────────────────────────

// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Fade-up on scroll (IntersectionObserver)
const fadeEls = document.querySelectorAll('.fade-up');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
fadeEls.forEach(el => fadeObserver.observe(el));

// Category filter
const pills = document.querySelectorAll('.cat-pill');
const cards = document.querySelectorAll('.product-card');
pills.forEach(pill => {
  pill.addEventListener('click', () => {
    pills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    const cat = pill.dataset.cat;
    cards.forEach(card => {
      const show = cat === 'all' || card.dataset.cat === cat;
      card.style.display = show ? 'block' : 'none';
    });
  });
});

// Notify form success message
const notifyForm = document.getElementById('notify-form');
const params = new URLSearchParams(window.location.search);
if (params.get('subscribed') === '1') {
  notifyForm.innerHTML = `
    <div style="text-align:center;padding:1rem;">
      <p style="font-family:var(--font-heading);font-size:1.1rem;color:var(--gold-bright);letter-spacing:0.1em;">
        ⚔️ You're on the list.
      </p>
      <p style="color:rgba(255,255,255,0.6);font-size:0.85rem;margin-top:0.5rem;">
        We'll hit you first when the collection drops.
      </p>
    </div>`;
}

// Hamburger (mobile) — basic toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  const open = navLinks.style.display === 'flex';
  navLinks.style.display = open ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '70px';
  navLinks.style.left = '0';
  navLinks.style.right = '0';
  navLinks.style.background = 'rgba(8,8,8,0.98)';
  navLinks.style.padding = '1.5rem 2rem';
  navLinks.style.gap = '1.5rem';
  navLinks.style.borderBottom = '1px solid var(--black-border)';
});

const icons = {
  whatsapp: `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="icon-stroke" d="M20.5 11.8a8.5 8.5 0 0 1-12.4 7.5L4 20.5l1.2-4A8.5 8.5 0 1 1 20.5 11.8Z"/><path class="icon-stroke" d="M9 8.8c.2-.5.5-.6.8-.6h.6c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.4.5c.6 1.1 1.5 2 2.6 2.6l.5-.4c.2-.2.5-.2.7-.1l1.6.7c.3.1.4.3.4.6v.6c0 .3-.2.6-.6.8-.8.4-2.7.2-4.9-1.2-2.5-1.6-3.9-4-4-5.3 0-.6.2-1.1.6-1.4Z"/></svg>`,
  file: `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="icon-stroke" d="M7 3h7l4 4v14H7z"/><path class="icon-stroke" d="M14 3v5h4M9 13h6M9 17h6"/></svg>`,
  checklist: `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="icon-stroke" d="M8 4h8M9 2h6v4H9zM6 5h12v17H6zM9 11l1.5 1.5L14 9M9 17l1.5 1.5L14 15"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="icon-stroke" d="M12 3 20 6v5c0 5-3.3 8.8-8 10-4.7-1.2-8-5-8-10V6z"/><path class="icon-stroke" d="m8.5 12 2.2 2.2 4.8-5"/></svg>`,
  award: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle class="icon-stroke" cx="12" cy="8" r="5"/><path class="icon-stroke" d="m8.5 12.5-2 7 5.5-3 5.5 3-2-7"/><path class="icon-stroke" d="m10 8 1.3 1.3L14 6.8"/></svg>`,
  ship: `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="icon-stroke" d="M3 15h18l-2 4H6zM6 15V9h12v6M9 9V5h6v4M4 20c1.5 1 3 1 4.5 0 1.5 1 3 1 4.5 0 1.5 1 3 1 4.5 0"/></svg>`,
  map: `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="icon-stroke" d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3zM9 3v15M15 6v15"/></svg>`,
  scale: `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="icon-stroke" d="M12 3v18M5 6h14M7 6l-4 7h8zM17 6l-4 7h8zM8 21h8"/></svg>`,
  officer: `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="icon-stroke" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21c1-4 4-6 8-6s7 2 8 6"/><path class="icon-stroke" d="M8 5h8M9 4l3-2 3 2"/></svg>`,
  truck: `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="icon-stroke" d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle class="icon-stroke" cx="7" cy="18" r="2"/><circle class="icon-stroke" cx="18" cy="18" r="2"/></svg>`,
  folder: `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="icon-stroke" d="M3 6h7l2 3h9v10H3z"/><path class="icon-stroke" d="M8 13h8M8 16h5"/></svg>`,
  box: `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="icon-stroke" d="m12 3 8 4-8 4-8-4zM4 7v10l8 4 8-4V7M12 11v10"/><path class="icon-stroke" d="m9 15 1.5 1.5L14 13"/></svg>`,
  users: `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="icon-stroke" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21c.8-4 3.8-6 8-6s7.2 2 8 6M4.5 10a3 3 0 0 0 2.5 5M19.5 10a3 3 0 0 1-2.5 5"/></svg>`,
  send: `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="icon-stroke" d="m22 2-7 20-4-9-9-4zM22 2 11 13"/></svg>`,
  search: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle class="icon-stroke" cx="10" cy="10" r="6"/><path class="icon-stroke" d="m15 15 5 5"/></svg>`,
  building: `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="icon-stroke" d="m3 10 9-6 9 6zM5 10v9M9 10v9M15 10v9M19 10v9M3 19h18"/></svg>`,
  done: `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="icon-stroke" d="M20 6 9 17l-5-5"/><path class="icon-stroke" d="M5 21h14"/></svg>`,
  speed: `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="icon-stroke" d="M4 14a8 8 0 0 1 16 0M12 14l5-5M6 20h12"/></svg>`,
  target: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle class="icon-stroke" cx="12" cy="12" r="8"/><circle class="icon-stroke" cx="12" cy="12" r="4"/><path class="icon-stroke" d="m14 10 6-6M20 4v4h-4"/></svg>`,
  headset: `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="icon-stroke" d="M4 13a8 8 0 0 1 16 0v4a3 3 0 0 1-3 3h-3M4 13v4h4v-6H4zM20 13v4h-4v-6h4z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="icon-stroke" d="M4 6h16v12H4z"/><path class="icon-stroke" d="m4 7 8 6 8-6"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="icon-stroke" d="M12 21s7-5.5 7-12a7 7 0 1 0-14 0c0 6.5 7 12 7 12Z"/><circle class="icon-stroke" cx="12" cy="9" r="2"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle class="icon-stroke" cx="12" cy="12" r="9"/><path class="icon-stroke" d="M12 7v5l3 2"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path class="icon-stroke" d="M6 9v11M6 5v.1M10 20v-7a4 4 0 0 1 8 0v7M10 13v-4"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect class="icon-stroke" x="4" y="4" width="16" height="16" rx="5"/><circle class="icon-stroke" cx="12" cy="12" r="4"/><path class="icon-stroke" d="M17 7h.1"/></svg>`
};

document.querySelectorAll('[data-icon]').forEach((item) => {
  const name = item.getAttribute('data-icon');
  if (icons[name]) item.innerHTML = icons[name];
});

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  document.body.classList.toggle('nav-open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    document.body.classList.remove('nav-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.main-nav a');

window.addEventListener('scroll', () => {
  let current = 'top';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) current = section.getAttribute('id');
  });

  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const phone = formData.get('phone');
  const message = formData.get('message');
  const whatsappMessage = encodeURIComponent(`مرحبًا، أنا ${name}\nرقم الجوال: ${phone}\n${message}`);
  window.open(`https://wa.me/97466292927?text=${whatsappMessage}`, '_blank', 'noopener');
});

const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', (event) => {
  event.preventDefault();
  newsletterForm.reset();
  alert('تم تسجيل البريد الإلكتروني بنجاح.');
});

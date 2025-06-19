// script.js

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

mobileMenuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const icon = mobileMenuToggle.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"], a[href$=".html"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    // Only smooth scroll on same-page anchors
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    // Close mobile menu if open
    navLinks.classList.remove('active');
    mobileMenuToggle.querySelector('i').classList.add('fa-bars');
    mobileMenuToggle.querySelector('i').classList.remove('fa-times');
  });
});

// Scroll-triggered fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// Testimonials slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const navDots = document.querySelectorAll('.nav-dot');

function showTestimonial(index) {
  testimonials.forEach((t, i) => t.classList.toggle('active', i === index));
  navDots.forEach((d, i) => d.classList.toggle('active', i === index));
  currentTestimonial = index;
}

// Auto-rotate testimonials every 5 seconds
if (testimonials.length > 0) {
  setInterval(() => {
    showTestimonial((currentTestimonial + 1) % testimonials.length);
  }, 5000);
}

// Contact form submission (simulated)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting…';
    submitBtn.disabled = true;

    setTimeout(() => {
      alert('Thank you! We will contact you soon to schedule your free trial class.');
      this.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });
}

// Image load fade-in
document.querySelectorAll('img').forEach(img => {
  img.style.transition = 'opacity 0.3s ease';
if (img.complete) {
  img.style.opacity = '1';
} else {
  img.style.opacity = '0';
  img.addEventListener('load', () => {
    img.style.opacity = '1';
  });
}

});

// Parallax effect for hero background (basic)
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
  }
});

// Hover lift effect on cards
document.querySelectorAll('.program-card, .feature-card, .project-card, .team-card')
  .forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

// Trigger initial fade-ins on page load
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach((el, i) => {
      setTimeout(() => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add('visible');
        }
      }, i * 100);
    });
  }, 500);
});
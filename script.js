// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        
        window.scrollTo({
            top: target.offsetTop - 60,  // Adjust for the fixed navbar
            behavior: 'smooth'
        });
    });
});

// Toggle visibility of album images when clicked
function toggleAlbum(albumId) {
    var album = document.getElementById(albumId);
    album.classList.toggle('active');
}


document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form from submitting to a server

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields before submitting the form!');
            return;
        }

        // Simulate form submission success
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        
        // Clear the form fields after submission
        contactForm.reset();
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const skillProgressBars = document.querySelectorAll('.skill-progress');

    // Set up the IntersectionObserver
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const targetWidth = skillBar.style.width = skillBar.parentElement.querySelector('.skill-progress').getAttribute('style');
                setTimeout(() => {
                    skillBar.style.width = skillBar.parentElement.querySelector('.skill-progress').getAttribute('style').replace("0", skillBar.parentElement.querySelector(".skill-progress").style.width);
                }, 100);
                observer.unobserve(skillBar);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    skillProgressBars.forEach(bar => {
        observer.observe(bar);
    });
});
function toggleSettings() {
    const settingsPanel = document.getElementById('settings-panel');
    settingsPanel.style.display = settingsPanel.style.display === 'block' ? 'none' : 'block';
}

function changeFontSize(size) {
    if (size === 'small') {
        document.body.style.fontSize = '14px';
    } else if (size === 'large') {
        document.body.style.fontSize = '18px';
    } else {
        document.body.style.fontSize = '16px';
    }
}

function changeLanguage(language) {
    const translations = {
        en: {
            h1: 'Welcome to Zsai Prime',
            heroDescription: 'Make good memory with Zsai Prime ',
            getStartedText: 'Get Started',
            servicesTitle: 'Our Services',
            servicesDescription: 'We provide a photography, graphic design, video editing and photo editing. We make sure to make a good impression with all our clients by providing a good experience.',
            aboutTitle: 'About Us',
            aboutDescription: 'Zsai Prime started in the year 2023 founded by the Student of STI College Santa Rosa. Ma.Theresa Plandanio is a Multimedia Arts Student originally from Quezon Province.',
            footerText: '© 2023 My Company. All Rights Reserved.'
        },
        es: {
            h1: 'Bienvenido a Nuestro Sitio Web',
            heroDescription: 'Tu éxito es nuestra prioridad.',
            getStartedText: 'Comenzar',
            servicesTitle: 'Nuestros Servicios',
            servicesDescription: 'We provide a photography, graphic design, video editing and photo editing. We make sure to make a good impression with all our clients by providing a good experience. ',
            aboutTitle: 'Sobre Nosotros',
            aboutDescription: 'Zsai Prime started in the year 2023 founded by the Student of STI College Santa Rosa. Ma.Theresa Plandanio is a Multimedia Arts Student originally from Quezon Province.',
            footerText: '© 2023 My Company. All Rights Reserved.'
        },
        fr: {
            h1: 'Bienvenue sur notre site Web',
            heroDescription: 'Votre succès est notre priorité.',
            getStartedText: 'Commencer',
            servicesTitle: 'Nos Services',
            servicesDescription: 'We provide a photography, graphic design, video editing and photo editing. We make sure to make a good impression with all our clients by providing a good experience. ',
            aboutTitle: 'À Propos de Nous',
            aboutDescription: 'Zsai Prime started in the year 2023 founded by the Student of STI College Santa Rosa. Ma.Theresa Plandanio is a Multimedia Arts Student originally from Quezon Province.',
            footerText: '© 2023 Ma Société. Tous les droits réservés.'
        }
    };

    const selectedLanguage = translations[language];
    document.getElementById('hero-title').textContent = selectedLanguage.heroTitle;
    document.getElementById('hero-description').textContent = selectedLanguage.heroDescription;
    document.getElementById('get-started-btn').textContent = selectedLanguage.getStartedText;
    document.getElementById('services-title').textContent = selectedLanguage.servicesTitle;
    document.getElementById('services-description').textContent = selectedLanguage.servicesDescription;
    document.getElementById('about-title').textContent = selectedLanguage.aboutTitle;
    document.getElementById('about-description').textContent = selectedLanguage.aboutDescription;
    document.getElementById('footer').textContent = selectedLanguage.footerText;
}
// Language dictionary with translations
const translations = {
  en: {
    homeTagline: "CREATIVITY IS BEYOND EVERYTHING",
    portfolioTitle: "Portfolio",
    graphicDesign: "Graphic Design",
    landscapePhotography: "Landscape Photography",
    videoSample: "Video Sample",
    movingTextDesign: "Moving Text Design",
    aboutTitle: "About",
    serviceTitle: "Service",
    contactTitle: "Contact",
    serviceIntro: "We are a team of passionate individuals...",
    contactIntro: "We'd love to hear from you! Reach out to us through the contact methods below:"
  },
  es: {
    homeTagline: "LA CREATIVIDAD ESTÁ MÁS ALLÁ DE TODO",
    portfolioTitle: "Portafolio",
    graphicDesign: "Diseño Gráfico",
    landscapePhotography: "Fotografía de Paisajes",
    videoSample: "Muestra de Video",
    movingTextDesign: "Diseño de Texto en Movimiento",
    aboutTitle: "Acerca de",
    serviceTitle: "Servicio",
    contactTitle: "Contacto",
    serviceIntro: "Somos un equipo de individuos apasionados...",
    contactIntro: "¡Nos encantaría saber de ti! Contáctanos a través de los métodos de contacto a continuación:"
  },
  fr: {
    homeTagline: "LA CRÉATIVITÉ EST AU-DELÀ DE TOUT",
    portfolioTitle: "Portfolio",
    graphicDesign: "Design Graphique",
    landscapePhotography: "Photographie de Paysages",
    videoSample: "Exemple de Vidéo",
    movingTextDesign: "Texte en Mouvement",
    aboutTitle: "À Propos",
    serviceTitle: "Service",
    contactTitle: "Contact",
    serviceIntro: "Nous sommes une équipe d'individus passionnés...",
    contactIntro: "Nous serions ravis d'avoir de vos nouvelles ! Contactez-nous via les méthodes de contact ci-dessous :"
  }
};

// Default language set to English
let currentLanguage = 'en';

// Function to change the displayed language dynamically
function changeLanguage(lang) {
  currentLanguage = lang; // Update the current language
  updateContent();
}

// Function to dynamically apply translations to the page
function updateContent() {
  document.querySelector('.tagline').innerText = translations[currentLanguage].homeTagline;
  document.querySelector('#portfolio .section-title').innerText = translations[currentLanguage].portfolioTitle;
  document.querySelectorAll('.portfolio p')[0].innerText = translations[currentLanguage].graphicDesign;
  document.querySelectorAll('.portfolio p')[1].innerText = translations[currentLanguage].landscapePhotography;
  document.querySelector('#video .section-title').innerText = translations[currentLanguage].videoSample;
  document.querySelectorAll('.video p')[1].innerText = translations[currentLanguage].movingTextDesign;
  document.querySelector('#about .section-title').innerText = translations[currentLanguage].aboutTitle;
  document.querySelector('#service .section-title').innerText = translations[currentLanguage].serviceTitle;
  document.querySelectorAll('#service p')[0].innerText = translations[currentLanguage].serviceIntro;
  document.querySelector('#contact .section-title').innerText = translations[currentLanguage].contactTitle;
  document.querySelectorAll('#contact p')[0].innerText = translations[currentLanguage].contactIntro;
}

// Toggle the settings panel visibility
function toggleSettings() {
  const panel = document.getElementById('settings-panel');
  panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
}
let currentFont = 'Arial';

function toggleSettings() {
  const settingsPanel = document.getElementById('settings-panel');
  settingsPanel.style.display = settingsPanel.style.display === 'block' ? 'none' : 'block';
}

// Function to dynamically change font
function changeFont(fontName) {
  document.body.style.fontFamily = fontName;
}
let currentFullScreenImg = null; // Track the currently active image in full-screen

function enterFullScreen(img) {
  // Request full screen for the clicked image
  if (img.requestFullscreen) {
    img.requestFullscreen();
  } else if (img.mozRequestFullScreen) { // For Firefox
    img.mozRequestFullScreen();
  } else if (img.webkitRequestFullscreen) { // For Chrome, Safari, and Opera
    img.webkitRequestFullscreen();
  } else if (img.msRequestFullscreen) { // For IE/Edge
    img.msRequestFullscreen();
  }

  currentFullScreenImg = img;
  document.getElementById('exit-btn').style.display = "block";
}

// Function to exit full-screen mode
function exitFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { // For Firefox
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { // For Chrome, Safari, and Opera
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { // For IE/Edge
    document.msExitFullscreen();
  }

  document.getElementById('exit-btn').style.display = "none";
  currentFullScreenImg = null;
}

// Handle exit behavior when leaving full-screen mode via keyboard or screen click
document.addEventListener("fullscreenchange", (event) => {
  if (!document.fullscreenElement) {
    document.getElementById('exit-btn').style.display = "none";
    currentFullScreenImg = null;
  }
});

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

function toggleMenu() {
  const menu = document.querySelector('.mobile-menu');
  menu.classList.toggle('active');
}
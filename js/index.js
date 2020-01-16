const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


const ctaTitle = document.querySelector('.cta .cta-text h1');
ctaTitle.textContent = siteContent.cta['h1'];
ctaTitle.style.textShadow = '0 0 2rem limegreen';

const btn = document.querySelector('button');
btn.textContent = siteContent.cta.button;

const splashImg = document.getElementById('cta-img');
splashImg.src = siteContent.cta["img-src"];

const midImg = document.getElementById('middle-img');
midImg.src = siteContent["main-content"]["middle-img-src"];

const links = document.querySelectorAll('a');
const linksArr = Array.from(links);
linksArr[0].textContent = siteContent['nav']['nav-item-1'];
linksArr[1].textContent = siteContent['nav']['nav-item-2'];
linksArr[2].textContent = siteContent['nav']['nav-item-3'];
linksArr[3].textContent = siteContent['nav']['nav-item-4'];
linksArr[4].textContent = siteContent['nav']['nav-item-5'];
linksArr[5].textContent = siteContent['nav']['nav-item-6'];
linksArr.forEach(i => i.style.color = 'green');

const navList = document.querySelector('nav');
const linkSignIn = document.createElement('a');
console.log(linkSignIn);
linkSignIn.textContent = 'Sign In';
linkSignIn.href = '#';
linkSignIn.style.color = 'green';
navList.appendChild(linkSignIn);
const linkHome = document.createElement('a');
linkHome.textContent = 'Home';
linkHome.href = '#';
linkHome.style.color = 'green';
navList.prepend(linkHome);

const h4s = document.querySelectorAll('h4');
const h4sArr = Array.from(h4s);
h4sArr[0].textContent = siteContent['main-content']['features-h4'];
h4sArr[1].textContent = siteContent['main-content']['about-h4'];
h4sArr[2].textContent = siteContent['main-content']['services-h4'];
h4sArr[3].textContent = siteContent['main-content']['product-h4'];
h4sArr[4].textContent = siteContent['main-content']['vision-h4'];
h4sArr[5].textContent = siteContent['contact']['contact-h4'];



const mainContentP = document.querySelectorAll('.main-content p');
const mainContentPArr = Array.from(mainContentP);
mainContentPArr[0].textContent = siteContent['main-content']['features-content'];
mainContentPArr[1].textContent = siteContent['main-content']['about-content'];
mainContentPArr[2].textContent = siteContent['main-content']['services-content'];
mainContentPArr[3].textContent = siteContent['main-content']['product-content'];
mainContentPArr[4].textContent = siteContent['main-content']['vision-content'];

const contactP = document.querySelectorAll('.contact p');
const contactPArr = Array.from(contactP);
contactPArr[0].textContent = siteContent['contact']['address'];
contactPArr[1].textContent = siteContent['contact']['phone'];
contactPArr[2].textContent = siteContent['contact']['email'];

const footerTxt = document.querySelector('footer');
footerTxt.textContent = siteContent.footer.copyright;
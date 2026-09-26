const root = document.documentElement;
const tabs = document.querySelectorAll('.tab');
const pages = document.querySelectorAll('[data-page-content]');
const detailsButton = document.querySelector('.details-toggle');
const profileDetails = document.querySelector('.profile-details');
const themeButtons = document.querySelectorAll('.theme-button');
const certificateGrid = document.querySelector('#certificate-grid');

const certificates = [
  ['AI For Everyone', 'ai-for-everyone.pdf'],
  ['AWS', 'aws.pdf'],
  ['Data', 'data.pdf'],
  ['Generative AI for Everyone', 'generative-ai-for-everyone.pdf'],
  ['Generative AI', 'generative-ai.pdf'],
  ['GitHub', 'github.pdf'],
  ['Python', 'python.pdf'],
  ['Web development', 'web.pdf'],
];

const savedTheme = localStorage.getItem('portfolio-theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
setTheme(savedTheme || systemTheme);

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem('portfolio-theme', theme);
  themeButtons.forEach((button) => {
    button.textContent = theme === 'dark' ? '☼' : '◐';
    button.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  });
}

function toggleTheme() {
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
}

themeButtons.forEach((button) => button.addEventListener('click', toggleTheme));
detailsButton.addEventListener('click', () => {
  const isOpen = profileDetails.classList.toggle('is-open');
  detailsButton.setAttribute('aria-expanded', isOpen);
  detailsButton.firstChild.textContent = isOpen ? 'Hide contact details ' : 'Show contact details ';
});

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.page;
    tabs.forEach((item) => item.classList.toggle('active', item === tab));
    pages.forEach((page) => page.classList.toggle('active', page.dataset.pageContent === target));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

certificateGrid.innerHTML = certificates.map(([title, file], index) => `
  <a class="certificate" href="public/assets/certificates/${file}" target="_blank" rel="noreferrer">
    <span class="certificate-index">0${index + 1}</span>
    <strong>${title}</strong>
    <span>↗</span>
  </a>
`).join('');

const imagesContainer = document.querySelector('.images');
const socialIconsContainer = document.querySelector('.social-icons');

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const themeText = document.querySelector('#theme-text');
const themeIcon = document.querySelector('#theme-icon');

const imagesObj = {
  'New Zeland':
    'https://images.unsplash.com/photo-1578131465775-e5408815923d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80',
  France:
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
  Spain:
    'https://images.unsplash.com/photo-1509840841025-9088ba78a826?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  'Great Britain':
    'https://images.unsplash.com/photo-1599736495992-bad61a2c5c7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
  Greece:
    'https://images.unsplash.com/photo-1503152394-c571994fd383?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  Japan:
    'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
};

const socialsArr = ['github', 'instagram', 'youtube', 'codepen', 'linkedin', 'facebook'];

const themeObj = {
  light: { text: 'Light Mode', icon: 'fa-sun' },
  dark: { text: 'Dark Mode', icon: 'fa-moon' },
};

const render = () => {
  Object.keys(imagesObj).forEach((key) => {
    const imageArticle = document.createElement('article');
    imageArticle.classList.add('image-container');

    const imageTitle = document.createElement('h2');
    imageTitle.textContent = key;

    const image = document.createElement('img');
    setAttributes(image, { src: imagesObj[key], alt: key });

    imageArticle.append(imageTitle, image);
    imagesContainer.appendChild(imageArticle);
  });

  socialsArr.forEach((social) => {
    const socialIcon = document.createElement('i');
    socialIcon.classList.add('fab', `fa-${social}`);
    socialIconsContainer.appendChild(socialIcon);
  });
};
const setAttributes = (element, attrObj) => {
  Object.keys(attrObj).forEach((key) => element.setAttribute(key, attrObj[key]));
};

const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.dataset.theme = 'dark';
    localStorageTheme('dark');
    themeSwap('dark');
  } else {
    document.documentElement.dataset.theme = 'light';
    localStorageTheme('light');
    themeSwap('light');
  }
};

const localStorageTheme = (theme) => localStorage.setItem('theme', theme);

const themeSwap = (theme) => {
  themeText.textContent = themeObj[theme].text;
  themeIcon.className = `fas ${themeObj[theme].icon}`;
};

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.dataset.theme = currentTheme;
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    themeSwap('dark');
  }
}
render();
toggleSwitch.addEventListener('click', switchTheme);

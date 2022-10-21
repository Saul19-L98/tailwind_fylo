import './style.css';

//|==> Module
import { viewTemplate } from './assets/js/view';

//Logo page
import favi from './assets/images/favicon-32x32.png';

// //Desktop
// import './assets/images/bg-curvy-desktop.svg';

// //Mobile
// import './assets/images/bg-curvy-mobile.svg';

// import './assets/images/instagram_icon.svg';

(function(){
    document.querySelector('body').innerHTML = viewTemplate();

    const addLogo = () => {
        const logoTag = document.createElement('link');
        logoTag.rel = 'icon';
        logoTag.type = 'icon/image';
        logoTag.href = `${favi}`;
        document.querySelector('head').appendChild(logoTag);
    }
    addLogo();
    
    const themeToggleBtn = document.querySelector('#theme-toggle');
    const themeToggleDarkIcon = document.querySelector('#theme-toggle-dark-icon');
    const themeToggleLightIcon = document.querySelector('#theme-toggle-light-icon');
    
    function addLocalStorage(){
        if (
            localStorage.getItem('color-theme') === 'dark' ||
            (!('color-theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
            themeToggleDarkIcon.classList.remove('hidden');
        } else {
            document.documentElement.classList.remove('dark');
            themeToggleLightIcon.classList.remove('hidden');
        }
    }
    
    addLocalStorage();
    
    themeToggleBtn.addEventListener('click',toggleMode);
    
    function toggleMode(){
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');
    
        //if is set in localstorage
        if(localStorage.getItem('color-theme')){
            //if light, make dark and save in localstorage
            if(localStorage.getItem('color-theme') === 'light'){
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme','dark');
            }else{
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme','light');
            }
        }else{
            //if not in localstorage
            if(document.documentElement.classList.contains('dark')){
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme','light');
            }else{
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme','dark');
            }
        }
    }
})();
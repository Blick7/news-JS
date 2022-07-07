import App from './components/app/app';
import './global.css';
import githubIcon from './assets/svg/icons8-github.svg';
import rsschoolIcon from './assets/png/logo-rsschool3.png';

const app = new App();
app.start();

const loadIcons = () => {
    const githubAElem = document.querySelector('.footer__github-icon') as HTMLMetaElement;
    const github = new Image();
    github.src = githubIcon;
    githubAElem.append(github);

    const rsschoolAElem = document.querySelector('.footer__rsschool-icon') as HTMLMetaElement;
    const rsschool = new Image();
    rsschool.src = rsschoolIcon;
    rsschoolAElem.append(rsschool);
};
loadIcons();

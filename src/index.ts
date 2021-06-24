import './scss/style.scss';
import {bootstrap} from './framework/core/bootstrap';
import {appModule} from './app/app.module';

bootstrap(appModule);

// import { App } from './app';

// window.onload = () => {
//   const appElement = document.getElementById('app');
//   if (!appElement) throw Error('App root element not found');
//   // new App(appElement).start();
//   new App(appElement);
// };


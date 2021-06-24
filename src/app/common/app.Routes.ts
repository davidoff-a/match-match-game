import { aboutPageComponent } from '../pages/aboutPageComponent';
import { bestScorePageComponent } from '../pages/bestScorePageComponent';
import { setPageComponent } from '../pages/setPageComponent';

export const appRoutes = [
  { path: 'about', component: aboutPageComponent },
  { path: 'best-score', component: bestScorePageComponent },
  { path: 'settings', component: setPageComponent },
];

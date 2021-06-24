import { aboutComponent } from '../../components/aboutComponent/aboutComponent';
import { bestScoreComponent } from '../../components/bestScoreComponent/bestScoreComponent';
import { settingsComponent } from '../../components/settingsComponent/settingsComponent';

export const appRoutes = [
  { path: 'about', text: 'About', component: aboutComponent },
  { path: 'best-score', text: 'Best Scort', component: bestScoreComponent },
  { path: 'settings', text: 'Settings', component: settingsComponent },
];

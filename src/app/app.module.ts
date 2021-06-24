import { appHeader } from './common/app.header';
import { WFMModule } from '../framework/index2';
import { AppComponent, appComponent } from './app.component';
import { appRoutes } from './common/app.Routes';
import { newPlayerButton } from './common/newPlayerBtn';
import { appRegForm } from './common/app.regForm';

class AppModule extends WFMModule {
  constructor(config: { components: AppComponent[], bootstrap: AppComponent, routes: {path: string, component: AppComponent}[] }) {
    super(config);
  }
}
export const appModule = new AppModule({
  components: [appHeader, newPlayerButton, appRegForm],
  bootstrap: appComponent,
  routes: appRoutes,
});

export const newPlayerBtn = document.querySelector("btn");

    if (newPlayerBtn) {

      newPlayerBtn.addEventListener('click', (event) => {
        event.preventDefault;
        console.log("It's gonna be OK!");
    })
  }


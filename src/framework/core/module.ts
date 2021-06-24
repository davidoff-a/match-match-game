import { AppComponent } from '../../app/app.component';
import { router } from '../../app/common/app.router';
// import { newPlayerButton } from '../../app/common/newPlayerBtn';

export class Module {
  components: AppComponent[];
  bootstrapComponent: AppComponent;
  routes: { path: string; component: AppComponent }[];

  constructor(config: {
    components: AppComponent[];
    bootstrap: AppComponent;
    routes: { path: string; component: AppComponent }[];
  }) {
    this.components = config.components;
    this.bootstrapComponent = config.bootstrap;
    this.routes = config.routes;
  }
  start(): void {
    this.initComponents();
    if (this.routes) this.initRoutes();
  }
  initComponents(): void {
    this.bootstrapComponent.render();
    if (this.components) {
      this.components.forEach(this.renderComponent.bind(this));
    }
  }
  initRoutes(): void {
    window.addEventListener('hashchange', this.renderRoute.bind(this));
    this.renderRoute();
  }
  renderRoute(): void {
    const url = router.getUrl();
    const defaultRoute: { path: string; component: AppComponent } =
      this.routes[0];
    const route: { path: string; component: AppComponent } =
      this.routes.find((r) => r.path === url) || defaultRoute;
    this.renderComponent(route.component);
  }

  renderComponent(c: AppComponent): void {
    c.render();
    if (c.afterInit) {
      c.afterInit();
    }
  }
  // initEvents(){
  //   newPlayerButton.initNewPlayerBtn();
  // }
}

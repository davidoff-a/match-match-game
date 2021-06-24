import { WFMComponent } from "../framework/index2";

export class AppComponent extends WFMComponent{
  constructor(config:{selector: string, template: string}) {
    super(config);
  }
}

export const appComponent = new AppComponent({
  selector: 'body',
  template: `
  <header class = "header">
  </header>
  <main></main>
  <footer></footer>
  `,
});




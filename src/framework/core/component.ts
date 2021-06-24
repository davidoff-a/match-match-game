import { router } from "../../app/common/app.router";

export class Component {
  selector: string;
  template: string;

  constructor(config:{selector: string, template: string}){
    this.template = config.template;
    this.selector = config.selector;
    // this.events = '';
  }
  render():void{
    const elem = document.querySelector(this.selector);
    if (elem){elem.innerHTML = this.template}
    router.deactivateLink('nav-menu__item', 'nav-menu__item_active');
    router.activateLink('nav-menu__item', 'nav-menu__item_active');
  }
  afterInit():void{
    // console.log('');
  }
}

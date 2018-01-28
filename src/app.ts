import { autoinject } from 'aurelia-dependency-injection';
import { Organisation } from './organisation/organisation';
import { Redirect } from 'aurelia-router';
import { LogManager } from 'aurelia-framework';

const logger = LogManager.getLogger('App');

@autoinject
export class App {
  private userNameFound: boolean = false;
  private canLogIn: boolean = false;
  private username: string = '';
  private userValid: boolean = false;
  private firstPercentage: number = 57;
  private secondPercentage: number = 68;
  private loginError: string = '';
  private firstSummaryStatText: string = 'This is a summary of some data.';
  private secondSummaryStatText: string = 'This is a summary of some data two.';
  private organisationDataSetOne: Array<number> = [35, 87, 56, 61];

  private allOrganisations: Array<string> = [
    'Organisation Name 1',
    'Organisation Name 2',
    'Organisation Name 3',
    'Organisation Name 4',
    'Organisation Name 5',
    'Organisation Name 6',
  ];

  constructor(private organisation: Organisation) {

  }

  // public attached(): void {

  // }

  public searchOrganisation(): void {
    let input, filter, ul, li, i;
    input = document.querySelector(".orgSearchName");
    filter = input.value;
    ul = document.querySelector(".sidebar-list");
    li = ul.getElementsByTagName("li");
    logger.debug('got the li>>>', li);

    for (i = 0; i < li.length; i++) {
      if (li.innerHTML.indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  public login(): void {
    let nameField: any = document.querySelector('input.username');

    if (nameField.value !== '') {
      if (this.username = nameField.value) {
        this.userNameFound = true;

        if (this.canLogIn && this.userValid) {
          this.userNameFound = true;
          console.debug('login? yeah>>>', this.userNameFound);
        }
      }
    }
    else {
      this.loginError = 'Please enter a valid username and try again.';
    }
  }

  // configureRouter(config, router) {
  //   config.title = 'user-dashboard';
  //   config.options.pushState = true;

  //   let map = [{
  //     route: ['', 'login'],
  //     name: 'login',
  //     moduleId: 'user/login',
  //     nav: false,
  //     title: 'Sign In',
  //     auth: false
  //   }, {
  //     route: 'logout', name: 'logout', moduleId: 'user/logout', nav: false, title: 'Log out', auth: true
  //   }, {
  //     route: 'join',
  //     name: 'join',
  //     moduleId: 'user/join',
  //     nav: false,
  //     title: 'Join',
  //     auth: false
  //   }, {
  //     route: 'redirect',
  //     name: 'redirect',
  //     moduleId: 'redirect/redirect',
  //     nav: false,
  //     title: 'Redirect',
  //     auth: false
  //   }, { route: 'hud', name: 'hud', moduleId: 'hud/hud', nav: false, title: 'HUD', auth: true }];

  //   config.map(map);
  //   this.router = router;
  // }
}

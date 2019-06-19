import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';



@Component({
  selector: 'app-function-list',
  templateUrl: './function-list.component.html',
  styleUrls: ['./function-list.component.css']
})
export class FunctionListComponent implements OnInit {
  @Output() onCloseSidebar = new EventEmitter();

  items: MenuItem[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [{
      label: ' ',
      items: [{
        label: 'Home',
        routerLink: [''],
        // icon: 'pi pi-fw pi-plus',
        // command: (click) => {this.router.navigate(['readme/kp']);}
      }]
    },{
      label: 'Demo',
      items: [{
        label: 'Key Phrases Extraction',
        routerLink: ['readme', 'kp'],
        // icon: 'pi pi-fw pi-plus',
        // command: (click) => {this.router.navigate(['readme/kp']);}
      },
      {
        label: 'Part of Speech',
        routerLink: ['readme', 'pos'],
        // icon: 'pi pi-fw pi-plus',
        // url: 'readme/pos'
      },
      {
        label: 'Gensim',
        routerLink: ['readme', 'gensim'],
        // icon: 'pi pi-fw pi-plus',
        // url: 'readme/gensim'
      }]
    },
    {
      label: 'API',
      icon: 'pi pi-fw pi-pencil',
      items: [{
        label: 'Key Phrases Extraction',
        routerLink: ['api', 'kp'],
        // icon: 'pi pi-fw pi-plus',
        // command: (click) => {this.router.navigate(['api/kp']);}
      },
      {
        label: 'Part of Speech',
        routerLink: ['api', 'pos'],
        // icon: 'pi pi-fw pi-plus',
        // url: 'api/pos'
      },
      {
        label: 'Gensim',
        routerLink: ['api', 'gensim'],
        // icon: 'pi pi-fw pi-plus',
        // url: 'api/gensim'
      }]
    }];
  }

  someMethod() {
    // this.trigger.openMenu();
  }

  activeMenu (e) {
    console.log('clicked sidebar menu');
    this.onCloseSidebar.emit(null);
  }

}

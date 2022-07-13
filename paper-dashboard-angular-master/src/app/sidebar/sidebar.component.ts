import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    
  
  { path: '/inscription',       title: 'Pré-inscription',    icon:'nc-tile-56',  class: ''},
  { path: '/etudientaccepte',       title: 'Etudient-accepte',    icon:'nc-tile-56',  class: ''},
  { path: '/etudientrefuse',       title: 'Etudient-refusé',    icon:'nc-tile-56',  class: ''},


];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}

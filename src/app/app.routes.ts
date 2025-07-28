import { Routes } from '@angular/router';
import {WebsiteLayoutComponent} from './layouts/website-layout-component/website-layout.component';
import {HomeComponent} from './website/home-component/home-component';
import {ContactComponent} from './website/contact-component/contact-component';
import {AboutComponent} from './website/about-component/about-component';

export const routes: Routes = [
  {
    path: '',
    component: WebsiteLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
    ]
  }
];

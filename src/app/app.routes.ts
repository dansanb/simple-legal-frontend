import { Routes } from '@angular/router';
import {WebsiteLayoutComponent} from './layouts/website-layout-component/website-layout.component';
import {HomeComponent} from './website/home-component/home-component';
import {ContactComponent} from './website/contact-component/contact-component';
import {AboutComponent} from './website/about-component/about-component';
import {CmsLayoutComponent} from './layouts/cms-layout-component/cms-layout.component';
import {UserProfileComponent} from './cms/user-profile-component/user-profile-component';
import {DashboardComponent} from './cms/dashboard-component/dashboard-component';
import {AuthCallbackComponent} from './auth-callback-component/auth-callback-component';

export const routes: Routes = [
  {
    path: '',
    component: WebsiteLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
    ]
  },
  {
    path: 'auth-callback',
    component: AuthCallbackComponent
  },
  {
    path: 'app',
    component: CmsLayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'user-profile', component: UserProfileComponent }
    ]
  }
];

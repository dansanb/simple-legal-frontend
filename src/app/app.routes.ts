import { Routes } from '@angular/router';
import {WebsiteLayoutComponent} from './_common/layouts/website-layout-component/website-layout.component';
import {HomeComponent} from './website/home-component/home-component';
import {ContactComponent} from './website/contact-component/contact-component';
import {AboutComponent} from './website/about-component/about-component';
import {CmsLayoutComponent} from './_common/layouts/cms-layout-component/cms-layout.component';
import {UserProfileComponent} from './cms/user-profile-component/user-profile-component';
import {DashboardComponent} from './cms/dashboard-component/dashboard-component';
import {AuthCallbackComponent} from './auth-callback-component/auth-callback-component';
import {AuthGuard} from '@auth0/auth0-angular';
import {StatusRolesComponent} from './cms/status-roles-component/status-roles-component';

export const routes: Routes = [
  {
    path: '',
    component: WebsiteLayoutComponent,
    children: [
      { path: '', component: HomeComponent, title: 'Simple Legal | Home' },
      { path: 'about', component: AboutComponent , title: 'Simple Legal | About'},
      { path: 'contact', component: ContactComponent, title: 'Simple Legal | Contact' },
    ]
  },
  { path: 'auth-callback', component: AuthCallbackComponent, title: 'Simple Legal | Logging you in...'},
  {
    path: 'app',
    component: CmsLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent, title: 'Dashboard' },
      { path: 'user-profile', component: UserProfileComponent, title: 'User Profile' },
      { path: 'status-roles', component: StatusRolesComponent, title: 'Status Codes' }
    ]
  }
];

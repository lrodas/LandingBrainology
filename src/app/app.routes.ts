import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';

const APP_ROUTE: Routes = [
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'home',
    component: BannerComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: '',
    component: AppComponent,
  },
  { path: '**', component: AppComponent }
];

export const APP_ROUTES = RouterModule.forRoot(APP_ROUTE, { useHash: true });

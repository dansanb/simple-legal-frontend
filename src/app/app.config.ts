import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideAuth0} from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-ak0hr7ddglrgjsdi.us.auth0.com',
      clientId: 'Gp5FFyJsFS21xjpR08VuLXM6XlS6Dc3M',
      authorizationParams: {
        redirect_uri: window.location.origin + "/auth-callback"
      }
    }),
  ]
};

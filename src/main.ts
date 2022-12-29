import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1IjoiZ2l2YWxlcmlhIiwiYSI6ImNsYnpqOXY3cDI3OGozcG5pYXZ1MWxsajcifQ.Q7LGD9_0r8YPvfD8v6LINg';

if ( !navigator.geolocation ) {
  alert('Browser has not sopport for Geolocation')
  throw new Error("Browser has not sopport for Geolocation");
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Connectivity } from './connectivity';
import { Geolocation } from 'ionic-native';


@Injectable()
export class GoogleMaps {

  mapElement: any;
  pleaseConnect: any;
  map: any;
  mapInitialised: boolean = false;
  mapLoaded: any;
  mapLoadedOberserver: any;
  currentMarker: any;
  apiKey: string;

  constructor(public connectivityService: Connectivity) {
    console.log('Hello GoogleMaps Provider');
  }

  init(mapElement: any, pleaseConnect: any): Promise<any> {

    this.mapElement = mapElement;
    this.pleaseConnect = pleaseConnect;

    return this.loadGoogleMaps();

  }

  loadGoogleMaps(): Promise<any> {

    return new Promise((resolve) => {

      if (typeof google == 'undefined' || typeof google.maps == 'undefined') {
        console.log('Google maps Javascript needs to be install');
        this.disableMap();

        //check connectivity
        if(this.connectivityService.isOnline()) {
          
        }
      }

    });
  }

  initMap(): Promise<any> {

  }

  disableMap(): void {

  }

  enableMap(): void {

  }

  addConnectivityListeners(): void {

  }

  changeMarker(lat: number, lng: number): void {

  }



}

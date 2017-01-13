import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LocationPage } from '../pages/location/location';
import { MyDetailsPage } from '../pages/my-details/my-details';
import { CampDetailsPage } from '../pages/camp-details/camp-details';
import { Data } from '../providers/data';
import { Connectivity } from '../providers/connectivity';
import { GoogleMaps } from '../providers/google-maps';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LocationPage,
    MyDetailsPage,
    CampDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LocationPage,
    MyDetailsPage,
    CampDetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Data, Connectivity, GoogleMaps, Storage]
})
export class AppModule {}

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { LocationPage } from '../pages/location/location';
import { MyDetailsPage } from '../pages/my-details/my-details';
import { CampDetailsPage } from '../pages/camp-details/camp-details';
import { QuickListsHomePage } from '../pages/quicklistshome/quicklistshome';
import { ChecklistPage } from '../pages/checklist/checklist';
import { GoogleMaps } from '../providers/google-maps';
import { Connectivity } from '../providers/connectivity';
import { Data } from '../providers/data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LocationPage,
    MyDetailsPage,
    CampDetailsPage,
    QuickListsHomePage,
    ChecklistPage
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
    CampDetailsPage,
    QuickListsHomePage,
    ChecklistPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage, Data, GoogleMaps, Connectivity]
})
export class AppModule {}

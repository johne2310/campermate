import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { Data } from '../../providers/data';
import { GoogleMaps } from '../../providers/google-maps';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class LocationPage {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('please-connect') pleaseConnect: ElementRef;

  constructor(public navCtrl: NavController, public platform: Platform,
    public alertCtrl: AlertController, public dataService: Data, public maps: GoogleMaps) {

  }

  ionViewDidLoad(): void {
    console.log('ionViewDidLoad LocationPage');
  }

  setLocation(): void {

  }

  takeMeHome(): void {

  }

}

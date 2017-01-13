import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '../../providers/data';


@Component({
  selector: 'page-camp-details',
  templateUrl: 'camp-details.html'
})
export class CampDetailsPage {
  campDetailsForm: FormGroup;

  constructor(public navCtrl: NavController, public dataService: Data, public formBuilder: FormBuilder) {

    this.campDetailsForm = formBuilder.group({
      gateAccessCode: [''],
      amenitiesCode: [''],
      wifiPassword: [''],
      phoneNumber: [''],
      departure: [''],
      notes: ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CampDetailsPage');
  }

  saveForm(): void {

    //capture form values in an object
    let data = this.campDetailsForm.value;

    // save the object 
    // this.dataService.setCampDetails(data;)

  }

}

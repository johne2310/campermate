import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '../../providers/data';


@Component({
  selector: 'page-my-details',
  templateUrl: 'my-details.html'
})
export class MyDetailsPage {
  myDetailsForm: FormGroup;

  constructor(public navCtrl: NavController, public dataService: Data, public formBuilder: FormBuilder) {

    this.myDetailsForm = formBuilder.group({
      carRegistration: [''],
      trailerRegistration: [''],
      trailerDimensions: [''],
      phoneNumber: [''],
      notes: ['']
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyDetailsPage');
  }

  saveForm(): void {

    //capture form values in an object
    let data = this.myDetailsForm.value;

    // save the object 
    // this.dataService.setCampDetails(data;)

  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  userForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { 

    this.userForm = this.createTrackingForm();
  }

  ngOnInit() {
  }

  /**
   * Create cuenta form
   *
   * @returns {FormGroup}
   */
  createTrackingForm(): FormGroup {
    return this._formBuilder.group({
      userId: [''],
      userName: ['']
    });
  }

}

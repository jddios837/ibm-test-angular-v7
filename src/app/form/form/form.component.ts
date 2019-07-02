import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

import { FormService } from "../form.service";

import { Store } from "store";
import { Observable } from 'rxjs';

declare const encriptarValor: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit, OnChanges {

  userForm: FormGroup;

  userNumberEncrypt: string;

  constructor(
    private _formService: FormService,
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private store: Store
    ) { 

    this.userForm = this.createTrackingForm();
  }

  ngOnChanges() {
    this.userForm.get('userDocument').valueChanges.subscribe(e => {
      
      
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    
    if (this.userForm.valid) {
      let user = {
        userName: this.userForm.value.userName,
        userDocument: this.userNumberEncrypt
      };

      this._formService.saveUser(user).subscribe(
        (resp: any) => {
          this.openSnackBar(resp.msg, 'Cerrar');
          this.userForm.reset();
        },
        (error) => {
          this.openSnackBar(error.msg, 'Cerrar');
        }
      )
    }
  }
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

  /**
   * Create cuenta form
   *
   * @returns {FormGroup}
   */
  createTrackingForm(): FormGroup {
    return this._formBuilder.group({
      userName: ['', [Validators.required]],
      userDocument: ['', {
        validators: [Validators.required, ],
        asyncValidators: [this.getEncryptValue.bind(this)],
        updateOn: 'blur'
      }]
    });
  }

  getEncryptValue(control: AbstractControl) {
    return new Observable((observer) => {
      // here encrypt the information
      this.store.select<string>('payMethods').subscribe(
        (payMethods: string) => {
          // this.userNumberEncrypt = encriptarValor(payMethods, control.value) // Get this error
          this.userNumberEncrypt = control.value
          observer.next();
      })

      
    })
  }

}

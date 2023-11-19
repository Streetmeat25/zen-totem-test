import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-profile-page-edit',
  templateUrl: './profile-page-edit.component.html',
  styleUrls: ['./profile-page-edit.component.less']
})
export class ProfilePageEditComponent  {
  
 //можно реализовать через formBuilder 
  editProfile: FormGroup = new FormGroup({
    'email': new FormControl('check@mail.com'),
    'firstName': new FormControl('',[
      Validators.required,
      Validators.maxLength(255)
    ]   
    ),
    'lastName' : new FormControl('',[
      Validators.required,
      Validators.maxLength(255),
    
    ]
    ),
    'phoneNumber': new FormControl('',[
      Validators.required,
      Validators.pattern(/^\+7\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/)
      
    ]
    ),
    'websiteUrl': new FormControl('',
      Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')
    )
  });
  isSubmitted = false;

  get firstName(){
    return this.editProfile.get('firstName');
  }
  get lastName(){
    return this.editProfile.get('lastName');
  }
  get phoneNumber(){
    return this.editProfile.get('phoneNumber');
  }
  get websiteUrl(){
    return this.editProfile.get('websiteUrl');
  }

  onSubmit(){
    console.warn(this.editProfile.value)
    this.isSubmitted = true;
  }

}

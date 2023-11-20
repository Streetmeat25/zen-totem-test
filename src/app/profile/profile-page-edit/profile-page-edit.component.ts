import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { ProfileService } from 'shared';

@Component({
  selector: 'app-profile-page-edit',
  templateUrl: './profile-page-edit.component.html',
  styleUrls: ['./profile-page-edit.component.less']
})
export class ProfilePageEditComponent implements OnInit {
  

  //можно реализовать через formBuilder 
  editProfile: FormGroup = new FormGroup({
    'email': new FormControl(this.profileService.profile$.email),
    'firstName': new FormControl(this.profileService.profile$.firstName,[
      Validators.required,
      Validators.maxLength(255)
    ]   
    ),
    'lastName' : new FormControl(this.profileService.profile$.lastName,[
      Validators.required,
      Validators.maxLength(255),
    
    ]
    ),
    'phoneNumber': new FormControl(this.profileService.profile$.phoneNumber,[
      Validators.required,
      Validators.pattern(/^\+7\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/)
      
    ]
    ),
    'websiteUrl': new FormControl(this.profileService.profile$.websiteUrl,
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

  constructor( private profileService: ProfileService){
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.isSubmitted = true;
    if(this.editProfile.valid){
      console.warn(this.editProfile.value)
      this.profileService.saveProfile(this.editProfile.getRawValue())
    }
   
  }

}

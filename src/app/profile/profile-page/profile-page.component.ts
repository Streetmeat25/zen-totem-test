import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'shared';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.less']
})
export class ProfilePageComponent implements OnInit {
  profileData= {
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    websiteUrl: '',
  };

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileData = this.profileService.profile$;
    
  }

}

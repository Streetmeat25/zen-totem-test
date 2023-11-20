import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'shared';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  isVisible: boolean = false;
  alert = {
    text: '',
    type: '',
    isVisible: false
  };
  firstName: string = '';
  lastName: string = '';

  constructor( private profileService: ProfileService ) {
    this.profileService.getAlert.subscribe(alert => this.alert = alert)
  }

  closeAlert(){
    this.profileService.disableAlert();
  }
  ngOnInit(): void {
    this.firstName = this.profileService.profile$.firstName;
    this.lastName = this.profileService.profile$.lastName;
  }

  

}

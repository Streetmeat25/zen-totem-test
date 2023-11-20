import { Injectable } from '@angular/core';
import { of, BehaviorSubject } from 'rxjs';

Injectable()
export class ProfileService {

    private profileData = new BehaviorSubject({
        email: "test@mail.ru",
        firstName: "test",
        lastName: "test2",
        phoneNumber: '+7(908) 993-74-98',
        websiteUrl: 'mail.ru'
    })

    public get profile$() { return this.profileData.value; }

     
    private alert = new BehaviorSubject({
        text: '',
        type: '',
        isVisible: false
    });
    
    public getAlert = this.alert.asObservable();
    
    constructor() { }

    disableAlert(){ 
        this.alert.next({text: '', type: '', isVisible: false});
    }
    updateSuccess(){
        this.alert.next({text:'Updated successfully', type: 'success', isVisible: true})
        setTimeout(() => {
            this.disableAlert();
        }, 30000);
    }
    updateFail(){
        this.alert.next({text: 'Something went wrong', type: 'error', isVisible: true})
    }
   

    saveProfile(profile) {
        if(profile.firstName.length == 1) this.updateFail();
        else {
            this.profileData.next(profile);
            this.updateSuccess();
        }
    }
}

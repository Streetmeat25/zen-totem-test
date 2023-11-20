import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  userdata: any;
  loginForm: FormGroup = new FormGroup({
    'login': new FormControl('', Validators.required),
    'password': new FormControl('', Validators.required )
  });
  isSubmited = false;
  roles = ['admin','client'];
  constructor(private authService: AuthService, private router: Router) { }

  get login(){
    return this.loginForm.get('login');
  }
  
  get password(){
    return this.loginForm.get('password');
  }
  ngOnInit(): void {
    this.authService.login()
  }
  

  Login() {
    this.isSubmited = true;
    if(this.loginForm.valid){
      this.authService.getUser(this.loginForm.value.login).subscribe( res => {
        this.userdata = res;
        console.log(this.userdata)
        if(this.userdata.password == this.loginForm.value.password){
          sessionStorage.setItem('username', this.userdata.id);
          sessionStorage.setItem('userRole', this.roles[1]);
          this.router.navigate(['']);
        }else {
          alert('wrong password')
        }
      });

    }
  }

}

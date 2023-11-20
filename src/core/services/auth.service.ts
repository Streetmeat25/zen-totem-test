import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class AuthService {

    apiUrl = 'http://localhost:5000/user';

    constructor (private http: HttpClient) {}

    public login() { console.log("login")}

    public logout() { sessionStorage.clear();}

    public getAll(){
        return this.http.get(this.apiUrl);
    }

    public getUser(id:any){
        return this.http.get(this.apiUrl+'/'+id)
    }
    public isLoggedIn(){
        return !!sessionStorage.getItem('username')
    }
}

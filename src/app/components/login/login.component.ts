import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string; 
  public isLogin: boolean = true;
  public isError: boolean = false;

  constructor(public firebaseAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  	this.firebaseAuth.auth.signOut();
  }

  register() {
  	this.firebaseAuth.auth.createUserWithEmailAndPassword(this.email, this.password).then(this.login()).catch(function(error) {
	  var errorCode = error.code;
	  var errorMessage = error.message;
	});
  }

  login() {
  	this.firebaseAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(this.router.navigate(['categories'])).catch(function(error) {
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  console.log(errorMessage);
	});
  }
}

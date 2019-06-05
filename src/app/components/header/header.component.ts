import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  events: string[] = [];
  opened: boolean;

  public isLoggedIn: boolean;
  
  constructor(public firebaseAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.firebaseAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  toggle(event) {
   event.srcElement.classList.toggle("change");
  }

  logout() {
    this.firebaseAuth.auth.signOut();
    this.isLoggedIn = false;
    this.router.navigate(['login']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: any;

  constructor(private authenticationService: AuthenticationService,private router: Router) {

    authenticationService.currentUser.source.subscribe(data => {
      this.currentUser = data;
    })
    // console.log(this.authenticationService.currentUserValue);
    // redirect to login if not login
    if (!this.authenticationService.currentUserValue) {
      this.router.navigate(['/auth/login']);
    }

   }

  ngOnInit() {
  }

}

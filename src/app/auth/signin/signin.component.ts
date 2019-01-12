import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { ServerService } from '../../shared/server.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router,
    private serverService: ServerService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
    // This is not finished and is wrong as it redirects no matter unsuccesful login
    setTimeout(() => {
        this.router.navigate(['./recipes']);
        this.serverService.getRecipes();
    }, 1000);
  }

}

import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { ServerService } from '../shared/server.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(private serverService: ServerService,
        private authService: AuthService,
        private router: Router) {}

    onSave() {
        this.serverService.storeRecipes()
            .subscribe(
                (response: Response) => {
                    console.log(response);
                }
            );
    }

    onGet() {
        this.serverService.getRecipes();
    }

    onLogout() {
        this.authService.logout();
        this.router.navigate(['./signin']);
    }
}

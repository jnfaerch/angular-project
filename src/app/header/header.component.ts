import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { ServerService } from '../shared/server.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(private serverService: ServerService) {}

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
}

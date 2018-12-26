import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

    subscriptions = ['Basic', 'Advanced',
    'Pro'];

    defaultSubscription = 'Advanced';

    @ViewChild('userForm') myForm: NgForm;

    submitted = false;

    onSubmit() {
        this.submitted = true;
        console.log(this.myForm.value);
    }

}

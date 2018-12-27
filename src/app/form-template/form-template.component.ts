import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { forbiddenNameValidator } from '../directives/forbidden-name.directive';

@Component({
    selector: 'app-form-template',
    templateUrl: './form-template.component.html',
    styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {

    userForm: FormGroup;

    projectStatus = ['Stable', 'Critical', 'Finished'];

    constructor() { }

    ngOnInit() {
        this.userForm = new FormGroup({
            'projectName': new FormControl(null, [
                Validators.required,
                Validators.minLength(4),
                forbiddenNameValidator(/test/i) // <-- Here's how you pass in the custom validator.
            ]),
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'projectStatus': new FormControl('Critical')
        });
    }

    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.log(this.userForm.value, this.userForm.status);
        this.userForm.reset();
    }

}

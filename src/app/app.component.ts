import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  //property binding to value in html to display default question in dropdown
  defaultQuestion: string = 'pet';
  //two way binding
  answer: string = '';

  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    //with the set value command,you pass an exact copy of the form value,
    //sets your whole form
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   selectedGender: 'male',
    // });
    //sets parts of the form
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  onSubmit() {
    console.log(this.signupForm);
  }
}

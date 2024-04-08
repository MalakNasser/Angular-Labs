import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  regForm = new FormGroup({
    name: new FormControl('Name', [Validators.minLength(3)]),
    age: new FormControl(23, [Validators.min(10), Validators.max(30)]),
    email: new FormControl('example@example.com', [Validators.email]),
  });

  showValidation = false;

  check() {
    if (this.regForm.valid) {
      alert('Form is Valid');
    } else {
      alert('Form is not Valid');
    }
  }

  get AgeValid() {
    return this.regForm.controls['age'].valid;
  }

  get NameValid() {
    return this.regForm.controls['name'].valid;
  }

  get EmailValid() {
    return this.regForm.controls['email'].valid;
  }
}

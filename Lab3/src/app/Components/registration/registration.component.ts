import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  name = '';
  age = '';
  newStudent = { name: '', age: '' };
  @Output() myEvent = new EventEmitter();

  Send() {
    if (this.name.length >= 3 && +this.age >= 25 && +this.age <= 30) {
      this.newStudent = { name: this.name, age: this.age };
      this.myEvent.emit(this.newStudent);
    } else {
      console.log('Validation failed');
    }
  }
}

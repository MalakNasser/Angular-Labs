import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-section',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-section.component.html',
  styleUrl: './input-section.component.css',
})
export class InputSectionComponent {
  inputValue: string = '';

  clearInput() {
    this.inputValue = '';
  }
}

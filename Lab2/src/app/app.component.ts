import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputSectionComponent } from '../Components/input-section/input-section.component';
import { ImageSectionComponent } from '../Components/image-section/image-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputSectionComponent, ImageSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Lab2';
}

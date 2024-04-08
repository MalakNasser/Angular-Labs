import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css',
})
export class StudentDetailsComponent {
  ID = 0;
  constructor(myRoute: ActivatedRoute) {
    this.ID = myRoute.snapshot.params['id'];
  }
}

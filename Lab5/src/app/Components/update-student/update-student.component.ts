import { Component } from '@angular/core';
import { StudentsService } from '../../Services/students.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-student',
  standalone: true,
  imports: [HttpClientModule, RouterModule, CommonModule, FormsModule],
  providers: [StudentsService],
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css',
})
export class UpdateStudentComponent {
  id: any;
  student: any;
  constructor(
    myRoute: ActivatedRoute,
    private studentService: StudentsService,
    private router: Router
  ) {
    this.id = myRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.fetchStudentData();
  }

  fetchStudentData() {
    this.studentService.GetStudentByID(this.id).subscribe((data) => {
      this.student = data;
    });
  }

  update(name: any, age: any, phone: any, email: any) {
    let student = { name, age, phone, email };
    this.studentService.UpdateStudentByID(this.id, student).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}

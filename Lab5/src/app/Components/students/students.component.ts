import { Component, OnInit } from '@angular/core';
import { OneStudentComponent } from '../one-student/one-student.component';
import { HttpClientModule } from '@angular/common/http';
import { Route, Router, RouterModule } from '@angular/router';
import { StudentsService } from '../../Services/students.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [HttpClientModule, RouterModule, OneStudentComponent, CommonModule],
  providers: [StudentsService],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent implements OnInit {
  constructor(
    private studentService: StudentsService,
    private router: Router
  ) {}
  Students: any;
  ngOnInit(): void {
    this.studentService.GetAllStudents().subscribe({
      next: (data) => {
        this.Students = data;
      },
      error: (err) => {
        console.log('Error!');
      },
    });
  }

  goToAddPage() {
    this.router.navigateByUrl('/add');
  }
}

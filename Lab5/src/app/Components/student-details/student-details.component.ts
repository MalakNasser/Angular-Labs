import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { StudentsService } from '../../Services/students.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [HttpClientModule, RouterModule, CommonModule],
  providers: [StudentsService],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css',
})
export class StudentDetailsComponent implements OnInit {
  id: any;
  student: any;
  constructor(
    myRoute: ActivatedRoute,
    private studentService: StudentsService,
    private router: Router
  ) {
    this.id = myRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.studentService.GetStudentByID(this.id).subscribe({
      next: (data) => {
        this.student = data;
      },
      error: (err) => {
        console.log('Error!');
      },
    });
  }

  delete() {
    let answer = confirm('Are you sure you want to delete this student?');
    if (answer) {
      this.studentService.DeleteStudentByID(this.id).subscribe(() => {
        this.router.navigateByUrl('/');
      });
    }
  }

  goToUpdatePage(studentId: string) {
    this.router.navigateByUrl(`/update/${studentId}`);
  }
}

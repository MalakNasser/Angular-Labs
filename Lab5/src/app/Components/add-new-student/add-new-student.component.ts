import { Component } from '@angular/core';
import { StudentsService } from '../../Services/students.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-student',
  standalone: true,
  imports: [HttpClientModule],
  providers: [StudentsService],
  templateUrl: './add-new-student.component.html',
  styleUrl: './add-new-student.component.css',
})
export class AddNewStudentComponent {
  constructor(private userService: StudentsService, private router: Router) {}

  add(name: any, age: any, phone: any, email: any) {
    let newUser = { name, age, phone, email };
    this.userService.AddStudent(newUser).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}

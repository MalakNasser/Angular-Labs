import { Routes } from '@angular/router';
import { StudentsComponent } from './Components/students/students.component';
import { AddNewStudentComponent } from './Components/add-new-student/add-new-student.component';
import { ErrorComponent } from './Components/error/error.component';
import { UpdateStudentComponent } from './Components/update-student/update-student.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';

export const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: StudentsComponent },
  { path: 'students/:id', component: StudentDetailsComponent },
  { path: 'add', component: AddNewStudentComponent },
  { path: 'update/:id', component: UpdateStudentComponent },
  { path: '**', component: ErrorComponent },
];

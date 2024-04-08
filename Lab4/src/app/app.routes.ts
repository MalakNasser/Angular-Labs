import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { StudentsComponent } from './Components/students/students.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { ErrorComponent } from './Components/error/error.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'student/:id', component: StudentDetailsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: ErrorComponent },
];

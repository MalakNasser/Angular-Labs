import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private readonly http: HttpClient) {}

  private readonly URL_API = 'http://localhost:3000/students';

  GetAllStudents() {
    return this.http.get(this.URL_API);
  }
  GetStudentByID(id: number) {
    return this.http.get(this.URL_API + '/' + id);
  }
  AddStudent(student: any) {
    return this.http.post(this.URL_API, student);
  }
  UpdateStudentByID(id: number, student: any) {
    return this.http.put(this.URL_API + '/' + id, student);
  }
  DeleteStudentByID(id: number) {
    return this.http.delete(this.URL_API + '/' + id);
  }
}

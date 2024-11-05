import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentList$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    filterStudentList$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

    constructor() {}

    getstudentListAsObservable() {
      return this.studentList$.asObservable();
    }

    setstudentListAsObservable(studentList:any) {
      this.studentList$.next(studentList);
    }

    getfilterStudentListAsObservable() {
      return this.filterStudentList$.asObservable();
    }
    setfilterStudentListAsObservable(filterStudentList:any) {
      this.filterStudentList$.next(filterStudentList);
    }
}

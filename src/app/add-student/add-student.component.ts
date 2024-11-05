import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
studentForm!:FormGroup;
  studentList:any=[];
    constructor(private student : StudentService){
      this.createStudent();
    }
    ngOnInit(){
      this.student.getstudentListAsObservable().subscribe((data)=>{
       this.studentList=data;
      })
    }

    createStudent(){
      this.studentForm=new FormGroup({
      name:new FormControl('',[Validators.required]),
  no:new FormControl('',[Validators.required]),
  phone: new FormControl('',[Validators.required]),
      })
    }
    onSubmit(){
      const studentRecord=this.studentForm.value;
      this.studentList.push(studentRecord)
     this.student.setstudentListAsObservable(this.studentList)
     this.studentForm.reset();
  }

}

import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  studentList:any=[];
    filteredstudentList:any=[];
    constructor(private student:StudentService){
    }

    ngOnInit(){
      this.student.getstudentListAsObservable().subscribe((data)=>{
        this.studentList=data;
        this.filteredstudentList=data;
       })
    }
    onSearch(searchString){
    const filterSearchValue= this.studentList.filter((data)=>{
      return data.name.includes(searchString) ;
    })
    this.filteredstudentList=filterSearchValue;
    }

    onDelete(record){
      const filterDeletedRecord=this.studentList.filter((data)=>data.no!==record.no);
    this.student.setstudentListAsObservable(filterDeletedRecord);
    }
}

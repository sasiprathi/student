import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent {

  @Input() studentList:any[]=[];
    @Output() delete=new EventEmitter<any>();

    onDelete(record){
    this.delete.emit(record);
    }

}

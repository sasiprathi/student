import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() onSearchText=new EventEmitter<any>();

    searchText:string="";
    constructor(){
     }

    onClearSearch() {
      this.searchText="";
      this.onSearchText.emit(this.searchText);
    }

    onSearch(){
    this.onSearchText.emit(this.searchText);
    }

}

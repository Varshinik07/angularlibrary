import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor() { }
  bookname=""
  authorname=""
  description=""

  readValues=()=>{
    let data={
      "bookname":this.bookname,
      "authorname":this.authorname,
      "description":this.description
    }
  }
  ngOnInit(): void {
  }

}

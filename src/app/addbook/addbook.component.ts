import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  bookname=""
  authorname=""
  description=""

  readValues=()=>{
    let data={
      "bookname":this.bookname,
      "authorname":this.authorname,
      "description":this.description
    }
    console.log(data)
    this.myapi.addbook(data).subscribe(
      (data)=>{
    
        alert ("data added successfully")
      }
      )
      

  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
export class SearchbookComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  bookname=""

  readValues=()=>{
    let data={
      "bookname":this.bookname
    }
    console.log(data)
    this.myapi.searchbook(data).subscribe(
      (response)=>{
        this.data=response
      }
    )
  }
  updatebook=()=>{
    this.myapi.updatebook(this.data[0]).subscribe(
      (response)=>{
        alert("updated successfully")
      }
    )
  }

   data:any=[]
  ngOnInit(): void {
  }

}

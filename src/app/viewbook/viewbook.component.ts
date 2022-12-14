import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
    this.myapi.viewbook().subscribe(
      (data)=>{
        this.viewbook=data
      }
    )
    
   }
   deletebook=(id:any)=>{
    let data={
      "id":id
    }
    this.myapi.deleteBook(data).subscribe(
      (response)=>{
        alert("deleted successfully")
      }
    )
   }
 viewbook:any=[]
  ngOnInit(): void {
  }

}

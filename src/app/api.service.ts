import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewbook=()=>{
    return this.http.get("http://localhost:8080/viewbook")
  }
  addbook=(data:any)=>{
    return this.http.post("http://localhost:8080/addbook",data)
  }
}

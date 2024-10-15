import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // doctorurl='http://localhost:3000/doctorlist'
  doctorurl='http://localhost:8081/doctor'
  // testurl='http://localhost:3000/testDetails'
  testurl='http://localhost:8080/tests'
  // allorderurl='http://localhost:3000/allOrder'
  allorderurl='http://localhost:8080/bookappointment'

  constructor(private http:HttpClient) { }

  addDoctor(data:any):Observable<any>{
    return this.http.post(this.doctorurl,data);
  }
  addTest(data:any):Observable<any>{
    console.log(data+"this is the service side data");
    return this.http.post(this.testurl,data);
  }

  getAllDoctor():Observable<any>{
    return this.http.get(this.doctorurl);
  }

  getAllTest():Observable<any>{
    return this.http.get(this.testurl);
  }

  deleteDoctor(id:any):Observable<any>{
    console.log(id+"this is the id")
    const url=`${this.doctorurl}/${id}`
    return this.http.delete(url);
  }

  deleteTest(id:any):Observable<any>{
    const url = `${this.testurl}/${id}`;
    return this.http.delete(url);
  }

  updateDoctor(id:any,data:any):Observable<any>{
    const url=`${this.doctorurl}/${id}`
    return this.http.put(url,data);
  }

  updateTest(id:any,data:any):Observable<any>{
    
    return this.http.put(this.testurl+"/"+id,data);
  }

  getAllOrder():Observable<any>{
    return this.http.get(this.allorderurl);
  }
}

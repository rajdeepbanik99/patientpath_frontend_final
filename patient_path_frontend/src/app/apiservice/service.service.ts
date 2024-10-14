import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  doctorurl='http://localhost:3000/doctorlist'
  testurl='http://localhost:3000/testDetails'
  allorderurl='http://localhost:3000/allOrder'

  constructor(private http:HttpClient) { }

  addDoctor(data:any):Observable<any>{
    return this.http.post(this.doctorurl,data);
  }
  addTest(data:any):Observable<any>{
    return this.http.post(this.testurl,data);
  }

  getAllDoctor():Observable<any>{
    return this.http.get(this.doctorurl);
  }

  getAllTest():Observable<any>{
    return this.http.get(this.testurl);
  }

  deleteDoctor(id:any):Observable<any>{
    return this.http.delete(this.doctorurl+"/"+id);
  }

  deleteTest(id:any):Observable<any>{
    return this.http.delete(this.testurl+"/"+id);
  }

  updateDoctor(id:any,data:any):Observable<any>{
    
    return this.http.put(this.doctorurl+"/"+id,data);
  }

  updateTest(id:any,data:any):Observable<any>{
    
    return this.http.put(this.testurl+"/"+id,data);
  }

  getAllOrder():Observable<any>{
    return this.http.get(this.allorderurl);
  }
}

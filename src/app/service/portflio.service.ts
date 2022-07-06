import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortflioService {
  server_address: string = 'api';
  constructor(private http:HttpClient) { }
  getportfolio(){
    console.log("a");
    //return this.http.get("http://localhost:8000/portfolio");
    return this.http.get<any>(`${this.server_address}/portfolio`);
    console.log("getportfolio");
  }
}

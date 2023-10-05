import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GettodosService {

  constructor(private http: HttpClient) { }

  public get(url: string) {
    return this.http.get(url);
  }
  public post(url: string, data: any) {
    return this.http.post(url, data);
  }
  // public put(url: string, data: any, options?: any) {
  //   return this.http.put(url, data, options);
  // }
  // public delete(url: string, options?: any) {
  //   return this.http.delete(url, options);
  // }
}
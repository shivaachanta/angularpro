import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
  url="https://dog.ceo/api/breed/hound/afghan/images"
  constructor(private http:HttpClient) {}
getEmpolyees(){
  return this.http.get(this.url);
}
}

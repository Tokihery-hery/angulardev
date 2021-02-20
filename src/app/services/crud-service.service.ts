import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  constructor(private __http: HttpClient) { }
  createUser(user: any) {
    return this.__http.post("http://localhost:3000/posts", user)
  }
  getAllUser(){
    return this.__http.get("http://localhost:3000/posts")
  }
  updateUser(user:any)  {
    return this.__http.put("http://localhost:3000/posts/"+user.id, user)
  } 
  deleteUser(user:any) {
    return this.__http.delete("http://localhost:3000/posts/"+user.id)
  }
}

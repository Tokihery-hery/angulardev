import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudmysqlService {

  constructor(private __http : HttpClient) { }
  createUser(user: any) {
    return this.__http.post("http://localhost/create", user)
  }
  getAllUser(){
    return this.__http.get("http://localhost/all")
  }
  updateUser(user:any)  {
    return this.__http.post("http://localhost/update/"+user.id, user)
  } 
  deleteUser(user:any) {
    return this.__http.post("http://localhost/delete/"+user.id, user)
  }
}

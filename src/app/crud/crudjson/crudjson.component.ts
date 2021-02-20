import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from "../../services/crud-service.service";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-crudjson',
  templateUrl: './crudjson.component.html',
  styleUrls: ['./crudjson.component.css']
})
export class CrudjsonComponent implements OnInit {
  allUser: any | undefined
  objectUser= {
    email: "",
    password: "",
    id: "",
  }
  isEdit = false
  constructor(private CrudServiceService: CrudServiceService) { 

  }

  ngOnInit(): void {
    this.getLatestUser()
  }
  addUser(formObj:any):void {
    console.log(formObj);
    this.CrudServiceService.createUser(formObj).subscribe(res => {
      console.log("User add ");
      this.getLatestUser()
    })
  }
  getLatestUser():void{
    this.CrudServiceService.getAllUser().subscribe(res=>{
      this.allUser= res
    })
  }
  editUser(user:any):void{
    this.isEdit = true 
    this.objectUser = user
  }
  updateUser(user:any):void{
   this.isEdit = !this.isEdit
    this.CrudServiceService.updateUser(this.objectUser).subscribe(()=>{
      this.getLatestUser()
      this.objectUser={
        email:"",
        password:"",
        id:""
      }
    })
  }
  deleteUser(user:any):void{
    this.CrudServiceService.deleteUser(user).subscribe(()=>{
     this.getLatestUser()
    })
  }
}

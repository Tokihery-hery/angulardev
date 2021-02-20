import { Component, OnInit } from '@angular/core';
import { CrudmysqlService } from 'src/app/services/crudmysql.service';

@Component({
  selector: 'app-crudmysql',
  templateUrl: './crudmysql.component.html',
  styleUrls: ['./crudmysql.component.css']
})
export class CrudmysqlComponent implements OnInit {
  allUser: any | undefined
  objectUser= {
    name:"",
    lastname:"",
    mail:""
  }
  success:string | undefined
  isEdit= false
  constructor(private CrudmysqlService: CrudmysqlService) { }

  ngOnInit(): void {
    this.getAlluser()
  }
  getAlluser():void {
    console.log("call getAllUser");
    
    this.CrudmysqlService.getAllUser().subscribe(resultat => {
     this.allUser = resultat
    })
  }
  ajouterNewUser(formObj:any):void{
    console.log(formObj);
    this.CrudmysqlService.createUser(formObj).subscribe(resultat=>{
      this.success= "Bien enregistrer"
      this.getAlluser()
      this.objectUser= {
        name:"",
        lastname:"",
        mail:""
      }
    })
  }
  editUser(user:any):void{
    this.isEdit = true 
    this.objectUser = user
    this.success =""
  }
  updateUser(user:any){
   this.isEdit = !this.isEdit
    this.CrudmysqlService.updateUser(this.objectUser).subscribe(res=>{
      this.getAlluser()
      this.objectUser= {
        name:"",
        lastname:"",
        mail:""
      }
      this.success ="Maj successful" 
      
    })
  }
  deleteUser(user:any):void{
    this.CrudmysqlService.deleteUser(user).subscribe(res=>{
      this.success="Bien supprimer"
     this.getAlluser()
    })
  }
}

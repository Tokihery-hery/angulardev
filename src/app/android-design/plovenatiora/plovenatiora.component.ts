import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plovenatiora',
  templateUrl: './plovenatiora.component.html',
  styleUrls: ['./plovenatiora.component.css']
})
export class PlovenatioraComponent implements OnInit {
  disabled = false
  navire =['/lovenatiora/food','/lovenatiora/travel', '/lovenatiora/picnik']
  i:any
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  navigation(e:any){
    let a= this.route.url
     this.i = this.navire.indexOf(a) + e
     if(this.i <=-1) this.i = 2
     if(this.i >=3) this.i = 0  
     this.route.navigate([`${this.navire[this.i]}`])
   }
   navirePoint(e:any){
     this.i = e
     this.route.navigate([`${this.navire[e]}`])
   }
   retour(){
    this.route.navigate(['/'])
   }
}

import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
// import { map, find } from "rxjs/operators";
@Component({
  selector: 'app-search-google',
  templateUrl: './search-google.component.html',
  styleUrls: ['./search-google.component.css']
})
export class SearchGoogleComponent implements OnInit {
@Input() keySearch:any
@Input() resultatData:any
@Output() lenClose:EventEmitter<any>=new EventEmitter()
resultat:any
len:any
genre:any
awaiting = true
yes:boolean = false
  constructor() {
    
   }
  ngOnInit(): void {
    typeof this.resultatData.datas == "object"?this.yes =true:this.yes= false
    this.len = typeof this.resultatData.datas == "object"?this.resultatData.datas.length:this.resultatData.datas
    this.len >1?this.genre = "s":this.genre = ""
    this.resultat = this.resultatData.datas
    this.awaiting = false
  }
  close(id:any){
    document.getElementById(id)?.remove()
    this.len = this.len -1
    this.lenClose.emit(this.len)
  }
}

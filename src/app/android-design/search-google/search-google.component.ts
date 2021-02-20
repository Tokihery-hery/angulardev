import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { map, find } from "rxjs/operators";
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
  constructor() {
    
   }
  ngOnInit(): void {
   setInterval(()=>{    
    this.len = document.querySelectorAll('.every-resultat').length
    this.len>1? this.genre="s": this.genre=""
    this.resultat = this.resultatData.datas
    this.awaiting = false
   }, 600)
  }
  close(id:any){
    document.getElementById(id)?.remove()
    this.len = this.len -1
    this.lenClose.emit(this.len)
  }
}

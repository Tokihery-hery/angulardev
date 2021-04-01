import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmoraServiceService } from 'src/app/services/emora-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers:[EmoraServiceService]
})
export class MenuComponent implements OnInit {
  aujourdhuit:any
  matbutton:boolean = true
  canShow:boolean= true
  paramShow:boolean|undefined
  iShow:boolean=true
  iSearch: boolean=false;
  gotoSearchInGoogle:String =""
  iShowList:boolean= false
  data:any| undefined
  resulatDat:[{datas:any, i:boolean, lens:Number}] | undefined
  len:number=0
  constructor(private route:Router,private googleService: EmoraServiceService) { }

  ngOnInit(): void {
    this.aujourdhuit = Date.now()
    if(this.route.url != '/' && this.route.url != '/search_google') this.iShow = false; this.iShowList = false
  }
  alertOk(){
    if(this.route.url === '/' && this.canShow){
      this.paramShow = !this.paramShow
    }
  }
  changerFond(){
   alert("cabhger fond d'ecran")
  }
  menu():void{
    this.paramShow = false
    this.canShow = !this.canShow
    this.iShow = true
    this.iSearch = false
    this.iShowList = !this.iShowList
    this.route.navigate(['/'])
  }
  back():void{
    this.route.navigate(['/'])
    this.canShow = true
    this.iShow = true
    this.iSearch = false
    this.iShowList = false
  }
  paramAfficher(){
    alert("params affichager")
  }
  goTosms(){
    this.route.navigate(['/sms'])
    this.iShow = false
    this.iSearch = false
    this.iShowList = false
    this.paramShow = false

  }
  goto(){
    this.iShow = false
    this.iSearch = false
    this.iShowList = false
    this.paramShow = false

  }
  searchGoogle(){
    let array=[]
    this.paramShow = false
    if(this. gotoSearchInGoogle.trim().length >0){
      this.iSearch = true
      this.iShowList = false
      this.googleService.searchVendeur(this.gotoSearchInGoogle).subscribe(res=>{
        array = [res]
        this.data = res
        if(array[0].toString().split(',').length===1){
          this.len = 0
        }else{
          this.len = array[0].toString().split(',').length
        }
        this.resulatDat = [{datas:this.data.resultat, i:this.iSearch, lens:this.len}]
      })
    }else{
      this.iSearch = false
      this.iShowList = true
    }
  }
  lenClose(id:any){
   if(id<=0){
    this.iSearch = false
    this.paramShow = !this.paramShow
    this.iShowList = true
   }
  }
  listApkNo(no:any){
    this.iShowList = no
    this.iShow = no
  }
}

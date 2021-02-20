import { Component, OnInit } from '@angular/core';
import { Observable, interval, range, observable } from 'rxjs'
import { map, filter, take, find, reduce, toArray, count } from 'rxjs/operators'
import { EmoraServiceService } from 'src/app/services/emora-service.service';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  obj: Observable<Object> = this.data.getAllvendeur()
  q: any
  datas: number[] | undefined
  color=['red','green','blue','white','orange','black']
  hotel = [
    {
      name: "Pappillon d'or",
      price: 3647
    },
    {
      name: "Mada hotel",
      price: 234
    }, {
      name: "Triolita",
      price: 1245
    }, {
      name: "Fandrintsara",
      price: 3647
    }, {
      name: "Mitia hotel",
      price: 4000
    }, {
      name: "Bourd'or hotel",
      price: 3000
    }
  ]
  constructor(private data: EmoraServiceService) { }

  ngOnInit(): void {
    this.obj = this.data.getAllvendeur()
    // this.useIntervalPipeTakeMapSubscribe()
    // this.useObseravableRangePipeMapFilterSubscribe()
    this.readDataFromDb()
  }
  useIntervalPipeTakeMapSubscribe(): void {
    let source$ = interval(1000)
    source$.pipe(
      take(this.hotel.length),
      map(x => this.hotel[x]),
      find(x => x.name === "Bourd'or hotel")
    ).subscribe(y => console.log(y)
    )
  }
  useObseravableRangePipeMapFilterSubscribe(): void {
    let source$: Observable<number> = range(0, 10)
    source$.pipe(
      map(x => x),
      filter(y => y % 2 === 0),
      find(x => x === 6)
    ).subscribe(resultat => console.log(resultat))
  }
  readDataFromDb(): void {
    let a: any[]
    let s: any[] = []
    let source$ = interval(100)
    this.obj.subscribe(res => {
      a = [res]
      for (const iterator of a) {
        for (const i in iterator) {
          s.push(iterator[i].row.id)
        }
      }
      this.datas = s
    })
  }
  test(): void {    
    let a = this.datas ? this.datas : []
    let source$ = interval(1000)
    let j =0
    source$.pipe(
      map(x => x),
      filter(s=>s<=23)
    ).subscribe(res =>{
        if(j>=6) j=0
        let data= document.querySelector('button')
      data?data.style.top=""+res+Math.random()*2 +"px":""
      data?data.style.left=""+res+Math.random()*2 +"px":""
      data?data.style.background=""+ this.color[j]:""
      j=j+1
      console.log(res);
      
    })
}
}

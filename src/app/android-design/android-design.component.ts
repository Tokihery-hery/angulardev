import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FooterComponent } from "./footer/footer.component";
import { FoodComponent } from './food/food.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-android-design',
  templateUrl: './android-design.component.html',
  styleUrls: ['./android-design.component.css']
})
export class AndroidDesignComponent implements OnInit {
  heur: Number | undefined
  minute: Number | undefined
  second: Number | undefined
  l:Number |undefined
  ok: Boolean = false
  prete: Boolean = false
  h:any
  constructor(private route:Router) { }
  ngOnInit(): void {
    this.demmarage()
    this.oclockIphone()
  }
  demmarage(): void {
    setTimeout(() => {
      this.ok = true
      this.preteFn(this.ok)
    }, 6000);
  }
  preteFn(e: Boolean): void {
    if (e) {
      setTimeout(() => {
        this.prete = true
      }, 2000);
    }
  }
  oclockIphone(): void {
    let e = new Date()
    this.heur = e.getHours()
    this.minute = e.getMinutes()
    this.second = e.getSeconds()
    setInterval(() => {
      e = new Date()
      this.heur = e.getHours()
      this.minute = e.getMinutes()
      this.second = e.getSeconds()
    }, 1000)
  }
}

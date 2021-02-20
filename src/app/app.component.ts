import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 ok= true
 show = false
  constructor() { }
  ngOnInit(): void {
  }
  test(): void {
    setTimeout(() => {
      this.show = true
    }, 3445);
  }
}

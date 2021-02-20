import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-apk-list',
  templateUrl: './apk-list.component.html',
  styleUrls: ['./apk-list.component.css']
})
export class ApkListComponent implements OnInit {
@Output() listApkNo:EventEmitter<any>=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  alertOk(){
    alert("alert hery")
  }
  gotoNoLidt():void{
    this.listApkNo.emit(false)
  }
}

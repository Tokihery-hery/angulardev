import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {
  newSms:boolean = false
  tel = "0344999128"
  constructor() { }

  ngOnInit(): void {
  }
  alert(){
    this.newSms =! this.newSms
  }
}

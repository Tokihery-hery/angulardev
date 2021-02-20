import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms'
import { Observable } from 'rxjs'
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  // is =false
  displayOrNo: Boolean =true
  obje = [{
    nom: 'tokihry',
    prenom: 'nambinintsoa',
    tel: 'no'
  },
  {
    nom: 'tokihry',
    prenom: 'nambinintsoa',
    tel: 'no'
  },
  {
    nom: 'tokihry',
    prenom: 'nambinintsoa',
    tel: 'no'
  }
    , {
    nom: 'tokihry',
    prenom: 'nambinintsoa',
    tel: 'no'
  }]
  constructor() { }
  ngOnInit(): void {
  }
  showOrHiddenChat():void {
    this.displayOrNo = !this.displayOrNo
  }
}
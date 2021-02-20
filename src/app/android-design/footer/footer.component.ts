import { Component, OnInit, Injectable } from '@angular/core';
import { map, filter, find} from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(private route: Router, private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {  
  }
}

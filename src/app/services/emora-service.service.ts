import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

// import { environment } from '../../environments/environment';
import { Item } from '../upload-file-img/model';

@Injectable({
  providedIn: 'root'
})
export class EmoraServiceService {
  private items: Item[] = [];
  private itemsUpdated = new Subject<{ items: Item[], count: number }>();
  baseUrl = "https://tkjsonserver.herokuapp.com/api"
  constructor(private __http: HttpClient, private route: Router) { }

  newVendeur(objVendeur: any) {
    return this.__http.post(`${this.baseUrl}/create`, objVendeur)
  }
  getAllvendeur() {
    return this.__http.get(`${this.baseUrl}/all`)
  }
  getIfExitUserName(obj: any) {
    return this.__http.get(`${this.baseUrl}/auth/name/${obj}`)
  }
  getIfExitUserMail(obj: any) {
    return this.__http.get(`${this.baseUrl}/auth/mail/${obj}`)
  }
  searchVendeur(obj: any) {
    return this.__http.get(`${this.baseUrl}/top?q=${obj}`)
  }
  getOneVendeur(obj: any, obj1: any) {
    return this.__http.get(`${this.baseUrl}/pageVendeur/${obj}/${obj1}`)
  }
  createImg(id: any) {
    return this.__http.get(`${this.baseUrl}/image/`, id)

  }
}
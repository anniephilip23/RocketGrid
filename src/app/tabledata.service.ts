import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITabledata } from './tabledata'
import { ITablehead } from './tablehead'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class TabledataService {

  private _url: string = "/assets/data/FakeJson.json"
  private _urlhead: string = "/assets/data/header.json"
  constructor(private http: HttpClient) { }
  getdata(): Observable<ITabledata[]> {
    return this.http.get<ITabledata[]>(this._url)

  }

  gethaed(): Observable<ITablehead[]> {
    return this.http.get<ITablehead[]>(this._urlhead)

  }
}

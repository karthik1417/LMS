import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  aaa:any='hellooooo'
  addEditFlag:boolean=false;
  BulkArray:any=[]
  constructor(private http: HttpClient) { }
  addAPI(data:any)
  {
     return this.http.post(`http://172.25.140.132:8080/ATMDevPortal/htd/save`,data)
  }
  // editAPI(data1:any)
  // {
  //    return this.http.post(`edit`,data1)
  // }
  bulkeditAPI(data2:any)
  {
     return this.http.post(`http://172.25.140.132:8080/ATMDevPortal/htd/update`,data2)
  }
  ListAPI(data3:any)
  {
     return this.http.get(`http://172.25.140.132:8080/ATMDevPortal/htd/details`,data3)
  }

  private listTable = new Subject();
  _listTable = this.listTable.asObservable();
  listMaterialTable(data: any = null) {
    this.listTable.next(data)
  }
  // this.service.listMaterialTable()
}

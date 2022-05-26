import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../models/product.model";
import {Subject} from "../../models/subject.model";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

    url = "https://api.topheinz.com/";
    //url = "https://localhost:7091/";
    //url = "http://localhost:5091/";

  constructor(private http: HttpClient) { }

    public getAllProducts(): Observable<Product[]>
    {
        return this.http.get<Product[]>("https://api.shop.topheinz.com/products/all")
    }

    public getAllProjects(): Observable<Subject[]>
    {
        return this.http.get<Subject[]>(this.url+'projects/all')
    }

}

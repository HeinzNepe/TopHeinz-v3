import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../models/product.model";
import {Subject} from "../../models/subject.model";
import {Project} from "../../models/project.model";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

    url = "https://api.topheinz.com/";
    //url = "https://localhost:7091/";
    //url = "http://localhost:5091/";

  constructor(private http: HttpClient) { }

    public getAllProjects(): Observable<Subject[]>
    {
        return this.http.get<Subject[]>(this.url+'projects/all')
    }

    public getProjectById(id: number): Observable<Project>
    {
        return this.http.get<Project>(this.url+'projects/id?id=' + id)
    }

}

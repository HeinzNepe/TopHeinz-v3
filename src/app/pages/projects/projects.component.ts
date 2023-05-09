import {Component, OnInit} from '@angular/core';
import {firstValueFrom} from "rxjs";
import {HttpService} from "../../services/http/http.service";
import {Subject} from "../../models/subject.model";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
    // Variable used to store subjects response
    subjects: Subject[] = []

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
      this.getProjects().then(() => console.log("[Project-component] Projects loaded from API response"))
  }

    async getProjects()
    {
        this.subjects = await firstValueFrom(this.httpService.getAllSubjects())
        if (!environment.production) {
            console.log("[Project-component] API returned following subjects:")
            console.log(this.subjects);
        }

    }

    splitDates(datetime: string)
    {
        return datetime.split(' ', 1)
    }
}

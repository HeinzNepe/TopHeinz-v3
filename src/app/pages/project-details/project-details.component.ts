import { Component, OnInit } from '@angular/core';
import {firstValueFrom} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpService} from "../../services/http/http.service";
import {Project} from "../../models/project.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
    // Variable to save project response
    project: Project = <Project>{};
    // Variable to save the url parameter
    id: number = <number>{};

    constructor(private httpService: HttpService,private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
              this.id = parseInt(<string>params.get("id"))
      })
      if (!environment.production) {
          console.log("[ProjectDetails-component] URL parameter id is:")
          console.log(this.id)
      }
      this.getProject().then(() => console.log("[ProjectDetails-component] Project loaded from API response"))
  }

    async getProject()
    {
        this.project = await firstValueFrom(this.httpService.getProjectById(this.id))
        if (!environment.production) {
            console.log("[ProjectDetails-component] API returned following project:")
            console.log(this.project);
        }

    }

    splitDates(datetime: string)
    {
        return datetime.split(' ', 1)
    }
}

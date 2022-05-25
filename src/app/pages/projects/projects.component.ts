import { Component, OnInit } from '@angular/core';
import {firstValueFrom} from "rxjs";
import {HttpService} from "../../services/http/http.service";
import {Project} from "../../models/project.model";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
    projects: Project[] = []

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
      this.getProjects().then(() => console.log("Projects loaded"))
  }

    async getProjects()
    {
        this.projects = await firstValueFrom(this.httpService.getAllProjects())
        console.log(this.projects)
    }

}

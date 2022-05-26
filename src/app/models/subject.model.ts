import {Project} from "./project.model";


export interface Subject {
    id: number,
    name: string,
    year: string,
    projects: Project[]
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {NotfoundComponent} from "./pages/notfound/notfound.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {AboutComponent} from "./pages/about/about.component";
import {ProjectDetailsComponent} from "./pages/project-details/project-details.component";
import {SocialsComponent} from "./pages/socials/socials.component";
import {LandingComponent} from "./pages/landing/landing.component";
import {WorkInProgressComponent} from "./pages/work-in-progress/work-in-progress.component";

const routes: Routes = [
    {path: '',   redirectTo: '/home', pathMatch: 'full'},
    {path: 'projects',   redirectTo: '/wip', pathMatch: 'full'},

    {path:'home', component: HomeComponent},
    {path:'socials', component: SocialsComponent},
    {path:'about', component: AboutComponent},
    {path:'wip', component: WorkInProgressComponent},
    {path: '**', component: NotfoundComponent}


    //{path:'landing', component: LandingComponent},
    /*  Routing to Project component. this is replaced by the WIP component rn
    {path:'projects', component: ProjectsComponent},
    {path:'projects/:id', component: ProjectDetailsComponent},
    */



    /*
    { path: 'home', component: FirstComponent },
    { path: 'second-component', component: SecondComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
    { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
    */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

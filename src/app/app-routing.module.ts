import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {NotfoundComponent} from "./pages/notfound/notfound.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {AboutComponent} from "./pages/about/about.component";
import {ProjectDetailsComponent} from "./pages/project-details/project-details.component";
import {SocialsComponent} from "./pages/socials/socials.component";

const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    {path:'home', component: HomeComponent},
    {path:'projects', component: ProjectsComponent},
    {path:'projects/:id', component: ProjectDetailsComponent},
    {path:'socials', component: SocialsComponent},
    {path:'about', component: AboutComponent},
    {path: '**', component: NotfoundComponent}



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

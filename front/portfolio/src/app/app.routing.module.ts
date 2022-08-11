import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'project',
    component: ProjectsComponent,
    children: [
      {
        path: 'step1',
        component: ProjectDetailsComponent,
      },
    ],
  },
  { path: 'contact', component: ContactComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

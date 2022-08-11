import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from 'src/app/about/about.component';
import { AuthGuard } from 'src/app/auth/auth.gaurd';
import { ContactComponent } from 'src/app/contact/contact.component';
import { DiaryDetailsComponent } from 'src/app/diary-details/diary-details.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { HomeComponent } from 'src/app/home/home.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { ProjectDetailsComponent } from 'src/app/project-details/project-details.component';
import { ProjectsComponent } from 'src/app/projects/projects.component';
import { ResumeComponent } from 'src/app/resume/resume.component';
import { ToDoListComponent } from 'src/app/to-do-list/to-do-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'project',
    component: ProjectsComponent,
    children: [
      {
        path: 'detail',
        component: ProjectDetailsComponent,
      },
    ],
  },
  { path: 'contact', component: ContactComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'resume', component: ResumeComponent },
  {
    path: 'diary',
    component: ResumeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: ':id/detail',
        component: DiaryDetailsComponent,
      },
    ],
  },
  {
    path: 'to-do-list',
    component: ToDoListComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: ':id/detail',
        component: DiaryDetailsComponent,
      },
    ],
  },
  { path: 'footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

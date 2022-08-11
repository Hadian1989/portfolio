import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { BaseComponent } from './base/base.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    BaseComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    BlogComponent,
    ResumeComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

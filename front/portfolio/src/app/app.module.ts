import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './loading/loading.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './modules/auth/app.routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { DiaryComponent } from './diary/diary.component';
import { DiaryDetailsComponent } from './diary-details/diary-details.component';

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
    EducationComponent,
    LoadingComponent,
    ToDoListComponent,
    DiaryComponent,
    DiaryDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

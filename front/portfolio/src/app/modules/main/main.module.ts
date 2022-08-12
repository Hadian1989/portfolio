import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from 'src/app/contact/contact.component';
import { AboutComponent } from 'src/app/about/about.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { BaseComponent } from 'src/app/base/base.component';
import { ProjectsComponent } from 'src/app/projects/projects.component';
import { BlogComponent } from 'src/app/blog/blog.component';
import { ResumeComponent } from 'src/app/resume/resume.component';
import { ToDoListComponent } from 'src/app/to-do-list/to-do-list.component';
import { DiaryComponent } from 'src/app/diary/diary.component';
import { DiaryDetailsComponent } from 'src/app/diary-details/diary-details.component';
import { EducationComponent } from 'src/app/education/education.component';
import { ProjectDetailsComponent } from 'src/app/project-details/project-details.component';
import { HomeComponent } from 'src/app/home/home.component';
import { JobComponent } from 'src/app/job/job.component';
import { SkillsComponent } from 'src/app/skills/skills.component';
import { FooterComponent } from 'src/app/footer/footer.component';

@NgModule({
  declarations: [
    ContactComponent,
    AboutComponent,
    HeaderComponent,
    BaseComponent,
    HomeComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    BlogComponent,
    ResumeComponent,
    EducationComponent,
    ToDoListComponent,
    DiaryComponent,
    DiaryDetailsComponent,
    JobComponent,
    SkillsComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
  exports: [
    EducationComponent,
    HomeComponent,
    JobComponent,
    SkillsComponent,
    FooterComponent,
  ],
})
export class MainModule {}

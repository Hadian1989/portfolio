import { Component, OnInit } from '@angular/core';
import { IProject } from '../models/IProject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: IProject[];

  constructor() {}

  ngOnInit(): void {}
}

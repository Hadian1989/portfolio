import { Component, OnInit } from '@angular/core';
import { IProject } from '../models/IProject';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent implements OnInit {
  project: IProject;
  constructor() {}

  ngOnInit(): void {}
}

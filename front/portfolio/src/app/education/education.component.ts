import { Component, OnInit } from '@angular/core';
import { IEducation } from '../models/IEducation';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['../home/home.component.css'],
})
export class EducationComponent implements OnInit {
  education: IEducation[];
  constructor() {

  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { ISkills } from '../models/ISkills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['../home/home.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: ISkills;
  constructor() {}

  ngOnInit(): void {}
}

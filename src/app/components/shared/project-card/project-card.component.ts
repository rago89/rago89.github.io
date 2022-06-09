import { Project } from './../../layout/projects/project-interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent implements OnInit {
  @Input() project?: Project;
  constructor() {}

  ngOnInit(): void {}
}

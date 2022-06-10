import { Component, OnInit } from '@angular/core';
import { Project } from './project-interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      shortDescription: 'Hack ypu future final Project refactored',
      title: 'Hand and paw',
      description: ` A wep application for adopting animals, the users can create an
      account, edit profile, register an animal, edit the animal, add
      favorite animal, contact the owner of the animal`,
      technologies: ['Angular', 'Express', 'Nodemailer', 'Multer', 'Heroku'],
      picture: '/assets/projects/hand-and-paw.png',
      githubUrl: 'https://github.com/rago89/hand-and-paw-angular',
      pageUrl: 'https://hand-and-paw.herokuapp.com/#/',
    },
    {
      shortDescription: 'Group project',
      title: 'Javascript Quiz',
      description: `An app that contains 5 questions, if the user answer is wrong show the right answer, and at the end of the quiz shows the score, this can restart the quiz if is needed`,
      technologies: ['JavaScript', 'Git', 'GitHub', 'Navigo'],
      picture: '/assets/projects/javascript-quiz.png',
      githubUrl: 'https://github.com/rago89/javascript-quiz',
      pageUrl: 'https://rago89.github.io/javascript-quiz/',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

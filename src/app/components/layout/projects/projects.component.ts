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
      shortDescription: 'Hack Your Future Belgium final Project refactored',
      title: 'Hand and paw',
      description: `A wep application for adopting animals, the users can create an
      account, edit profile, register an animal, edit the animal, add and manage
      favorites animals, contact the owner of the animal.`,
      technologies: ['Angular', 'Express', 'Nodemailer', 'Multer', 'Heroku'],
      picture: '/assets/projects/hand-and-paw.png',
      githubUrl: 'https://github.com/rago89/hand-and-paw-angular',
      pageUrl: 'https://hand-and-paw.herokuapp.com/#/',
    },
    {
      shortDescription: 'Fun game to keep a healthy memory',
      title: 'Memory Game',
      description: `Memory Game where users have to memorize cards, the game is based in levels on each level the user is going to have three opportunities to pass the level.`,
      technologies: ['Typescript', 'Mongodb', 'Express', 'Angular', 'Node'],
      picture: '/assets/projects/under-construction.gif',
      githubUrl: 'https://github.com/rago89/memory-game',
      pageUrl: '',
    },
    {
      shortDescription: 'First Portfolio',
      title: 'My first Portfolio',
      description: `First portfolio created during Hack Your Future Belgium training, using GitHub API to fetch the repositories that are sorted as projects and study journey.`,
      technologies: ['JavaScript', 'Git', 'GitHub'],
      picture: '/assets/projects/first-portfolio.png',
      githubUrl: 'https://github.com/rago89/my_first_portfolio.github.io',
      pageUrl: '',
    },
    {
      shortDescription: 'Group project at Hack Your Future Belgium',
      title: 'Javascript Quiz',
      description: `An app that contains 5 questions, if the user answer is wrong show the right answer, and at the end of the quiz shows the score, the user can restart the quiz if he needs it.`,
      technologies: ['JavaScript', 'Git', 'GitHub', 'Navigo'],
      picture: '/assets/projects/javascript-quiz.png',
      githubUrl: 'https://github.com/rago89/javascript-quiz',
      pageUrl: 'https://rago89.github.io/javascript-quiz/',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

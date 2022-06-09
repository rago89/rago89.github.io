import { ContactMeComponent } from './components/layout/contact-me/contact-me.component';
import { ProjectsComponent } from './components/layout/projects/projects.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseComponent } from './components/layout/showcase/showcase.component';
import { SkillsComponent } from './components/layout/skills/skills.component';
import { AboutMeComponent } from './components/layout/about-me/about-me.component';

const routes: Routes = [
  { path: '', component: ShowcaseComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact-me', component: ContactMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

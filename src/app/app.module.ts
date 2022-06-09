import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ShowcaseComponent } from './components/layout/showcase/showcase.component';
import { ProjectsComponent } from './components/layout/projects/projects.component';
import { AboutMeComponent } from './components/layout/about-me/about-me.component';
import { SkillsComponent } from './components/layout/skills/skills.component';
import { StudyJourneyComponent } from './components/layout/study-journey/study-journey.component';
import { ContactMeComponent } from './components/layout/contact-me/contact-me.component';
import { HamburgerComponent } from './components/layout/hamburger/hamburger.component';
import { ProjectCardComponent } from './components/shared/project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShowcaseComponent,
    ProjectsComponent,
    AboutMeComponent,
    SkillsComponent,
    StudyJourneyComponent,
    ContactMeComponent,
    HamburgerComponent,
    ProjectCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

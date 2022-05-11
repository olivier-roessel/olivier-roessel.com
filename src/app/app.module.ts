import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CvComponent } from './pages/cv/cv.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MemoireSourcesComponent } from './pages/memoire-sources/memoire-sources.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent,
    CvComponent,
    FooterComponent,
    MemoireSourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, data: { animation: 'home' } },
      { path: 'projects', component: ProjectsComponent, data: { animation: 'projects' } },
      { path: 'contact', component: ContactComponent, data: { animation: 'contact' } },
      { path: 'cv', component: CvComponent, data: { animation: 'cv' } },
      { path: 'memoire-sources', component: MemoireSourcesComponent, data: { animation: 'home' } },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ], { scrollPositionRestoration: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

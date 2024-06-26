import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';
import { adminGuard } from 'src/app/core/gurads/admin/admin.guard';

const routes: Routes = [
  { 
    path: '', 
    component: HomepageComponent, 
    children: [
      { path: 'dashboard', component:DashboardComponent },
      {path:'docs' , loadChildren:()=>import('../docs/docs.module').then(m=>m.DocsModule) , data:{ title: 'Documents |' }},
      {path:'vids' , loadChildren:()=>import('../video/video.module').then(m=>m.VideoModule)},
      {path:'sections' , loadChildren:()=>import('../section/section.module').then(m=>m.SectionModule)},
      {path:'courses' , loadChildren:()=>import('../courses/courses.module').then(m=>m.CoursesModule)},
      {path:'users' , loadChildren:()=>import('../users/users.module').then(m=>m.UsersModule) , canActivate:[adminGuard]},
      {path:'mynotes' , loadChildren:()=> import('../notes/notes.module').then(m=>m.NotesModule)},
      {path:'myfavs' , loadChildren:()=> import('../favs/favs.module').then(m=>m.FavsModule)},
      {path:'profile' , loadChildren:()=> import('../profile/profile.module').then(m=>m.ProfileModule)},
      {path:'quotes' , loadChildren:()=> import('../quotes/quotes.module').then(m=>m.QuotesModule)},
      {path:'my-library' , loadChildren:()=> import('../library/library.module').then(m=>m.LibraryModule)},
      {path:'extra' , loadChildren:()=> import ('../extra/extra.module').then(m=>m.ExtraModule)}




    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
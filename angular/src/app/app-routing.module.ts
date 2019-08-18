import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { TeacherDashboardComponent } from './teacher/teacher/teacher-dashboard/teacher-dashboard.component';
import { TeacherComponent } from './teacher/teacher/teacher.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'teacher', component: TeacherComponent, children: [
      { path: 'teacher-dashboard', component: TeacherDashboardComponent },
      { path: '', redirectTo: 'teacher-dashboard', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

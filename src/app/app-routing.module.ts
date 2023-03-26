import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableListcompComponent } from './table-listcomp/table-listcomp.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService as AuthGuard } from './auth-guard.service'
import { AddEditFormComponent } from './add-edit-form/add-edit-form.component';
const routes: Routes = [
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent },
  { path: 'table-view', component: TableListcompComponent,canActivate: [AuthGuard]  },
  { path: 'add-edit-page', component: AddEditFormComponent ,canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

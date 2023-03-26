import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'  
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSortModule} from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { TableListcompComponent } from './table-listcomp/table-listcomp.component';
import { AddEditFormComponent } from './add-edit-form/add-edit-form.component';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TableListcompComponent,
    AddEditFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    MatSortModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    HttpClientModule
  ],
  exports:[MatInputModule,MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

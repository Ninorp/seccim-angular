import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LikeButtonComponent } from './like-button/like-button.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { ListComponent } from './list/list.component';
import { FormAlunoComponent } from './form-aluno/form-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    LikeButtonComponent,
    TwoWayComponent,
    CalculatorComponent,
    ListComponent,
    FormAlunoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

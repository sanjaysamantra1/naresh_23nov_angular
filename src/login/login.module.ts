import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    // 100 Components
    LoginComponent,
  ],
  imports: [CommonModule, BrowserModule],
  exports: [LoginComponent], // export -1 comp
  bootstrap: [LoginComponent],
})
export class LoginModule {}

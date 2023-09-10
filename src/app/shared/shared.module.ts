import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ThemeModule } from './theme.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ThemeModule, FormsModule],
  exports: [ThemeModule, FormsModule],
  providers: [],
})
export class SharedModule {}

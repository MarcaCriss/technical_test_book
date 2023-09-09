import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ThemeModule } from './theme.module';

@NgModule({
  imports: [ThemeModule],
  exports: [ThemeModule],
  providers: [],
})
export class SharedModule {}

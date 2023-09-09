import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';

const MODULES_PRIME = [ButtonModule];
@NgModule({
  imports: [...MODULES_PRIME],
  exports: [...MODULES_PRIME],
  providers: [MessageService],
})
export class ThemeModule {}

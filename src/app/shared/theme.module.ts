import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';

const MODULES_PRIME = [
  ButtonModule,
  CardModule,
  DropdownModule,
];
@NgModule({
  imports: [...MODULES_PRIME],
  exports: [...MODULES_PRIME],
  providers: [MessageService],
})
export class ThemeModule {}

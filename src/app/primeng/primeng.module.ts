import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';

@NgModule({
  exports: [InputTextModule, PasswordModule, ImageModule, ButtonModule],
})
export class MaterialModule {}

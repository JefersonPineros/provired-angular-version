import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { InputPassComponent } from './input-pass.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export * from './input-pass.component';

@NgModule({
  declarations: [InputPassComponent],
  imports: [CommonModule, PasswordModule, FormsModule, ReactiveFormsModule],
  exports: [InputPassComponent],
})
export class InputPassModule {}

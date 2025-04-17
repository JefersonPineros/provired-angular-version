import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponentComponent } from './help-component.component';
import {
  ButtonComponentModule,
  InputTextComponentModule,
  TextAreaModule,
} from '../components.module';
import { SpeedDialModule } from 'primeng/speeddial';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HelpReportService } from 'src/app/services/home/reportes/help-report.service';
import { SessionStorageService } from 'src/app/services/utils/session-storage.service';

export * from './help-component.component';

@NgModule({
  declarations: [HelpComponentComponent],
  imports: [
    CommonModule,
    InputTextComponentModule,
    ButtonComponentModule,
    SpeedDialModule,
    OverlayPanelModule,
    TextAreaModule,
    FileUploadModule,
    NgxSpinnerModule,
    ToastModule,
  ],
  exports: [HelpComponentComponent],
  providers: [MessageService, HelpReportService, SessionStorageService],
})
export class HelpComponentModule {}

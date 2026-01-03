import { Component } from '@angular/core';
import { FileUrl } from 'src/app/constans/files-const';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';

@Component({
  selector: 'app-rama-jucial',
  templateUrl: './rama-jucial.component.html',
  styleUrls: ['./rama-jucial.component.scss'],
})
export class RamaJucialComponent {
  public links = FileUrl;

  constructor(public breadCrumService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadCrumService.setItems([
      { label: 'Reportes' },
      { label: 'Reporte Rama Judicial' },
    ]);
  }

  download(url: any, file: any) {
    fetch(url)
      .then((response) => response.blob())
      .then((blod) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blod);
        link.download = file;
        link.click();
      })
      .catch(console.error);
  }
}

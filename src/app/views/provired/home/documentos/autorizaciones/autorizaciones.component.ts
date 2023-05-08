import { Component, OnInit } from '@angular/core';
import { FileUrl } from 'src/app/constans/files-const';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';

@Component({
  selector: 'app-autorizaciones',
  templateUrl: './autorizaciones.component.html',
  styleUrls: ['./autorizaciones.component.scss']
})
export class AutorizacionesComponent implements OnInit{

  public links = FileUrl;

  constructor(public breadCrumService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadCrumService.setItems(
      [
        {label: 'Documentos'},
        {label: 'Autorizaciones'},
      ]
    );
  }

  download(url: any,file: any) {
    fetch(url)
      .then(response => response.blob())
      .then(blod => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blod);
        link.download = file;
        link.click();
      })
      .catch(console.error);
  }
}

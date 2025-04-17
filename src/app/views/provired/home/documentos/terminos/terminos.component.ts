import { Component, OnInit } from '@angular/core';
import { TerminosCondicionesService } from 'src/app/services/home/documentos/terminos.service';
import { BreadcrumbService } from 'src/app/services/utils/app.breadcrumb.service';

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.component.html',
  styleUrls: ['./terminos.component.scss'],
})
export class TerminosComponent implements OnInit {
  public terminos: string = '';

  constructor(
    public breadCrumService: BreadcrumbService,
    private terminosService: TerminosCondicionesService
  ) {}

  ngOnInit(): void {
    this.breadCrumService.setItems([
      { label: 'Documentos' },
      { label: 'Terminos y condiciones' },
    ]);

    this.terminosService.getTerminos().subscribe({
      next: (res) => {
        this.terminos = res.msg;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}

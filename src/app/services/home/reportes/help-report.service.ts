import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SendError } from 'src/app/models/home/utils/sendError';

@Injectable({
  providedIn: 'root',
})
export class HelpReportService {
  constructor(private http: HttpClient) {}

  public sendError(error: SendError, username: string): Observable<any> {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('asunto', error.asusto);
    formData.append('descripcion', error.descripcion);
    formData.append('image', error.image);
    return this.http.post<any>(
      `${environment.apiBaseUrl}reporte/insert`,
      formData
    );
  }
}

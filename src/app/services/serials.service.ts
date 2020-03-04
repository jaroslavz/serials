import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SerialModel } from '../models/serial.model';

const API_URL =  `http://localhost:8080/api`;

@Injectable()
export class SerialsService {
  private serialsUrl = `${API_URL}`;

  constructor(private http: HttpClient) {
  }

  getserials(): Observable<SerialModel[]> {
    return this.http.get<SerialModel[]>(`${this.serialsUrl}`);
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Guest } from '@groomly/platform';
import { environment } from '../../../environments';

@Injectable({ providedIn: 'root' })
export class GuestHttpService {

  private readonly baseUrl: string = `${environment.baseUrl}`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Guest[]> {
    return this.http.get<Guest[]>(`${this.baseUrl}/guests`);
  }

  create(guest: Guest): Observable<Guest> {
    return this.http.post<Guest>(`${this.baseUrl}/guests`, guest);
  }

  delete(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/guests/${id}`);
  }
}

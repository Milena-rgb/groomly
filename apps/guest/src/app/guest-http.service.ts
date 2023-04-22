import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Guest } from './model';

@Injectable({ providedIn: 'root' })
export class GuestHttpService {

  private readonly baseUrl: string = 'http://localhost:3333/api';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Guest[]> {
    return this.http.get<Guest[]>(`${this.baseUrl}/guests`);
  }

  create(todo: Guest): Observable<Guest> {
    return this.http.post<Guest>(`${this.baseUrl}/guests`, todo);
  }

  delete(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/guests/${id}`);
  }
}

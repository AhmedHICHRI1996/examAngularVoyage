import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Voyage } from './models/voyage';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {

  constructor(private http: HttpClient) {}

  addVoyage(voyage: Voyage) {
    return this.http.post('http://localhost:3000/voyages', voyage);
  }

  getVoyageByID(id: number) {
    return this.http.get('http://localhost:3000/voyages/' + id);
  }

  getVoyages() {
    return this.http.get('http://localhost:3000/voyages/');
  }

}

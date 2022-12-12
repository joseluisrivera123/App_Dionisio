import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PersonaDto } from '../dtos/persona.dto';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<PersonaDto[]>(`${environment.apiUrl}/Persona`);
  }
  register(persona: PersonaDto){
    return this.http.post(`${environment.apiUrl}/Persona`, persona );
  }

  finByName(Nombre: string) {
    return this.http.get<PersonaDto[]>(`${environment.apiUrl}/persona/Nombre/${Nombre}`);
  }
}

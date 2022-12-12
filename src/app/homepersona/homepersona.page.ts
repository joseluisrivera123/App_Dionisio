import { Component, OnInit } from '@angular/core';
import { PersonaDto } from '../dtos/persona.dto';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-homepersona',
  templateUrl: './homepersona.page.html',
  styleUrls: ['./homepersona.page.scss'],
})
export class HomepersonaPage implements OnInit {

  Persona: PersonaDto[] = [];
  personaService: any;
  constructor(private persona:PersonaService) { }

  ngOnInit() {
    this.finall();
  }
  personitas: any[] = [];
  finall(){
    this.persona.findAll().subscribe((res: any)=>{
      this.Persona = res;
      console.log(res);
    })
  }

}

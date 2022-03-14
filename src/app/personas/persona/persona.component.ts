import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent implements OnInit {
  @Input() persona: Persona = new Persona('', '');
  @Input() indice: number = 0;

  constructor(private personasService: PersonasService) {}

  ngOnInit(): void {}
}
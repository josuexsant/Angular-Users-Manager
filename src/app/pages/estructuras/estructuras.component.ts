import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estructuras',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './estructuras.component.html',
  styleUrls: ['./estructuras.component.css']
})
export class EstructurasComponent {
  mostrarEjemplo = true;
  opcionSeleccionada = 'angular';
  tecnologias = ['Angular', 'React', 'Vue', 'TypeScript', 'JavaScript'];

  toggleEjemplo() {
    this.mostrarEjemplo = !this.mostrarEjemplo;
  }
}

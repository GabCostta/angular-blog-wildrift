import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // Você pode adicionar propriedades para armazenar informações dinâmicas, se necessário
  anoAtual: number;

  constructor() {
    // No construtor, você pode inicializar as propriedades
    this.anoAtual = new Date().getFullYear();
  }
}

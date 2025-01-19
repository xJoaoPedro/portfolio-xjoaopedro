import { NgFor } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [NgFor],
  templateUrl: './formations.component.html',
})
export class FormationsComponent {
  items = [
    '/public/certs/certFront1.jpg',
    '/public/certs/certFront2.jpg',
    '/public/certs/certOutro1.jpg',
    '/public/certs/certOutro2.jpg',
    '/public/certs/certOutro3.jpg',
    '/public/certs/certFront3.jpg',
    '/public/certs/certFront4.jpg',
  ];

  selectedIndex = 3; // Índice inicial
  isButtonDisabled = false;

  moveToSelected(direction: string | number): void {
    if (this.isButtonDisabled) return;

    this.isButtonDisabled = true;
    setTimeout(() => {
      this.isButtonDisabled = false;
    }, 400);

    if (direction === 'next') {
      this.selectedIndex = (this.selectedIndex + 1) % this.items.length;
    } else if (direction === 'prev') {
      this.selectedIndex = (this.selectedIndex - 1) % this.items.length;
    }
  }

  getClass(index: number): string {
    const difference = (index - this.selectedIndex + this.items.length) % this.items.length;

    switch (difference) {
      case 0: // Item selecionado
        return 'z-9 left-1/2 transform -translate-x-1/2 scale-110 opacity-100';
      case 1: // Próximo item
        return 'z-5 left-3/4 transform -translate-x-1/2 translate-y-[40px] scale-[60%] opacity-70';
      case 2: // Segundo à direita
        return 'z-4 left-[90%] transform -translate-x-1/2 translate-y-[100px] scale-[80%] opacity-50';
      case this.items.length - 1: // Item anterior (à esquerda)
        return 'z-5 left-1/4 transform -translate-x-1/2 translate-y-[30px] scale-[60%] opacity-70';
      case this.items.length - 2: // Segundo à esquerda
        return 'z-4 left-[10%] transform -translate-x-1/2 translate-y-[20px] scale-[40%] opacity-50';
      case 3: // escondido a direita
        return 'opacity-0 transform scale-[0.2] left-[110%] top-1/2';
      case 4:
        return 'opacity-0 transform scale-[0.2] left-[-110%] top-1/2';
      default:
        return 'transform scale-[0.2] left-1/2';

    }
  }
}
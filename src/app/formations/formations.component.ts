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
        return 'z-10 left-1/2 transform -translate-x-1/2 scale-100 opacity-100';
      case 1: // Próximo item
        return 'z-[9] right-[28%] transform translate-x-1/2 translate-y-[50px] scale-[70%] opacity-80';
      case 2: // Segundo à direita
        return 'z-[8] right-[8%] transform translate-x-[30%] translate-y-[110px] scale-[40%] opacity-50';
      case this.items.length - 1: // Item anterior (à esquerda)
        return 'z-[9] left-[28%] transform -translate-x-1/2 translate-y-[50px] scale-[70%] opacity-80';
      case this.items.length - 2: // Segundo à esquerda
        return 'z-[8] left-[8%] transform -translate-x-[30%] translate-y-[110px] scale-[40%] opacity-50';
      case 3: // escondido a direita
        return 'right-[-32%] transform -translate-x-1/2 ease-in-out z-6 scale-[25%] opacity-10';
      case 4:
        return 'left-[-32%] transform -translate-x-1/2 ease-in-out z-6 scale-[25%] opacity-10';
      default:
        return 'transform scale-[0.2] left-1/2';

    }
  }
}

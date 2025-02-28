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
    '/public/certs/certAlgJs.avif',
    '/public/certs/certBalta.avif',
    '/public/certs/certgitegithub.avif',
    '/public/certs/certAngular.avif',
    '/public/certs/certHTMLeCSS.avif',
    '/public/certs/certCampus.avif',
    '/public/certs/certPokedex.avif',
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
        return 'z-[9] right-[5%] sm:right-[20%] lg:right-[28%] transform translate-x-1/2 md:translate-y-[50px] translate-y-[10px] scale-[70%] opacity-90';
      case 2: // Segundo à direita
        return 'z-[8] right-[2%] md:right-[8%] transform translate-x-[30%] md:translate-y-[110px] translate-y-[10px] scale-[40%] opacity-50';
      case this.items.length - 1: // Item anterior (à esquerda)
        return 'z-[9] left-[5%] sm:left-[20%] lg:left-[28%] transform -translate-x-1/2 md:translate-y-[50px] translate-y-[10px] scale-[70%] opacity-90';
      case this.items.length - 2: // Segundo à esquerda
        return 'z-[8] left-[2%] md:left-[8%] transform -translate-x-[30%] md:translate-y-[110px] translate-y-[10px] scale-[40%] opacity-50';
      case 3: // escondido a direita
        return 'right-[-32%] transform -translate-x-1/2 ease-in-out z-[6] scale-[25%] opacity-0';
      case 4:
        return 'left-[-32%] transform -translate-x-1/2 ease-in-out z-[6] scale-[25%] opacity-0';
      default:
        return ' transform scale-[0.2] left-[-32%] scale-10 opacity-0';

    }
  }
}

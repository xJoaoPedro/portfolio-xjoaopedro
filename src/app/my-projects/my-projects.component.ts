import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css'
})
export class MyProjectsComponent {
url(arg0: string) {
throw new Error('Method not implemented.');
}
  isModalOpen: { [key: number]: boolean } = {};
  isClosing: { [key: number]: boolean } = {};

  openModal(modalId: number) {
    this.isModalOpen[modalId] = true;
    this.isClosing[modalId] = false;
  }

  closeModal(modalId: number) {
    this.isClosing[modalId] = true;
    setTimeout(() => {
      this.isModalOpen[modalId] = false;
    }, 500); // Duração da animação (500ms)
  }
}

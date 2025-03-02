import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-front-parallax',
  standalone: true,
  imports: [],
  templateUrl: './front-parallax.component.html'
})
export class FrontParallaxComponent {
  isDarkTheme = false;

  title = 'xJoaoPedro';
  private baseTitle = 'xJoaoPedro';
  devDark = '/public/images/devDark.svg';
  devLight = '/public/images/devLight.svg';
  devImage = this.devLight;
  parallaxContainer: any | null;
  layer: any | null;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.layer = document.getElementById('layer');
    this.parallaxContainer = document.getElementById('parallax-container');
  
    if (this.parallaxContainer == null || this.layer == null) {
      return;
    }
  
    document.addEventListener('mousemove', (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
  
      const speed = 80; 
      const translateX = x * speed;
      const translateY = y * speed;
  
      this.layer.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.1)`;
      this.parallaxContainer.style.backgroundPosition = `${translateX / 3}px ${translateY / 3}px`;
    });
  
    this.themeService.theme$.subscribe((isDark) => {
      this.isDarkTheme = isDark;
    });
  
    setInterval(() => this.alternarTexto(), 900);
  }

  alternarTexto() {
    if (this.title.endsWith('_')) {
      this.title = this.baseTitle;
    } else {
      this.title += '_';
    }
  }

}

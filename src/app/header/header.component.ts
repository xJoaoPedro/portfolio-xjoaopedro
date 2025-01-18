import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  isDarkTheme = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.themeService.theme$.subscribe((isDark) => {
      this.isDarkTheme = isDark;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  scrollToComponent(compString: any) {
    const targetElement = document.getElementById(compString);
    
    if (targetElement) {
      const offset = 8 * (window.innerHeight / 100);
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
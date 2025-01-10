import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
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
}

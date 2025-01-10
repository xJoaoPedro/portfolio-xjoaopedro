import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  isDarkTheme = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.theme$.subscribe((isDark) => {
      this.isDarkTheme = isDark;
    });;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

}

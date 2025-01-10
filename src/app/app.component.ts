import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, AboutComponent],
})
export class AppComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    if (this.themeService.isDarkTheme()) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-frontpage',
  standalone: true,
  imports: [],
  templateUrl: './frontpage.component.html',
})
export class FrontPageComponent implements OnInit {
  isDarkTheme = false;

  title = 'xJoaoPedro';
  private baseTitle = 'xJoaoPedro';
  devDark = '/public/images/devDark.svg';
  devLight = '/public/images/devLight.svg';
  devImage = this.devLight;


  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.theme$.subscribe((isDark) => {
      this.isDarkTheme = isDark;
      this.updateDevImage();
    });

    setInterval(() => this.alternarTexto(), 900);
  }

  updateDevImage() {
    if (this.isDarkTheme) {
      this.devImage = this.devDark;
    } else {
      this.devImage = this.devLight;
    }
  }

  alternarTexto() {
    if (this.title.endsWith('_')) {
      this.title = this.baseTitle;
    } else {
      this.title += '_';
    }
  }

}

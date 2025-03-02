import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { FormationsComponent } from "./formations/formations.component";
import { FrontParallaxComponent } from './front-parallax/front-parallax.component';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, AboutComponent, MyProjectsComponent, ContactComponent, FormationsComponent, FrontParallaxComponent],
})
export class AppComponent implements OnInit {
  constructor(private themeService: ThemeService) { }
  btn: any;

  ngOnInit() {
    initFlowbite();

    if (this.themeService.isDarkTheme()) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    window.addEventListener('scroll', this.scrollVerify);
    this.scrollVerify();
  }

  scrollVerify() {
    this.btn = document.getElementById("back-to-top");

    if (document.documentElement.scrollTop > 700) {
      this.btn.classList.add("opacity-100");
      this.btn.classList.add("visible");
      this.btn.classList.remove("opacity-0");
      this.btn.classList.remove("invisible");
    } else {
      this.btn.classList.add("opacity-0");
      this.btn.classList.add("invisible");
      this.btn.classList.remove("opacity-100");
      this.btn.classList.remove("visible");
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  textAboutMe = 'Hello world!';
  private baseAboutMe = 'Hello world!';

  ngOnInit(): void {
    setInterval(() => this.alternarTexto(), 900);
  }

  alternarTexto() {
    if (this.textAboutMe.endsWith('_')) {
      this.textAboutMe = this.baseAboutMe;
    } else {
      this.textAboutMe = this.textAboutMe.slice(0, -1);
      this.textAboutMe = this.textAboutMe + "_";
    }
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkMode = new BehaviorSubject<boolean>(false);
  theme$ = this.isDarkMode.asObservable();

  toggleTheme() {
    const isDark = !this.isDarkMode.value;
    this.isDarkMode.next(isDark);

    const htmlElement = document.documentElement;
    if (isDark) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }

  isDarkTheme(): boolean {
    return this.isDarkMode.value;
  }
}

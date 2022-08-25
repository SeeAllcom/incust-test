import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

export const STORAGE_THEME_KEY = 'theme';

@Injectable({providedIn: 'root'})
export class ThemeService {
  prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  themeMode$ = new BehaviorSubject<'dark' | 'white' | 'auto'>(null);
  isDarkMode$ = new BehaviorSubject<boolean>(document.querySelector('body').classList.contains('dark'));

  constructor(private storage: StorageService) {
    this.prefersDark.addEventListener('change', (mediaQuery) => {
      this.themeMode$.pipe(
        filter((theme) => theme === 'auto'),
      ).subscribe((theme) => {
        this.isDarkMode$.next(mediaQuery.matches);
        document.body.classList.toggle('dark', mediaQuery.matches);
      });
    });
  }

  toggleTheme(theme) {
    const themeStorageKey = !theme ? 'auto' : theme;
    this.themeMode$.next(themeStorageKey);
    this.storage.set(STORAGE_THEME_KEY, themeStorageKey).then();
    document.body.classList.toggle('dark', this.isBodyDarkClass(theme));
  }

  isBodyDarkClass(theme) {
    switch (theme) {
      case 'dark' :
        return true;
      case 'white' :
        return false;
      case 'auto' :
        return this.prefersDark.matches;
      default :
        return this.prefersDark.matches;
    }
  }
}

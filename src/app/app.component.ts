import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { STORAGE_THEME_KEY, ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private storage: Storage,
    private themeService: ThemeService,
  ) {}

  async ngOnInit() {
    await this.storage.create();
    this.setTheme();
  }

  private setTheme() {
    this.storage.get(STORAGE_THEME_KEY).then((data) => {
      this.themeService.toggleTheme(data);
    });
  }
}

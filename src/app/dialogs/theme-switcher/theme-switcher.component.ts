import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent implements OnInit {
  themeMode$ = this.themeService.themeMode$;

  constructor(
    private themeService: ThemeService,
    public navCtrl: NavController,
    public modalController: ModalController,
  ) { }

  setTheme(theme: string) {
    this.themeService.toggleTheme(theme);
  }

  ngOnInit() {}

}

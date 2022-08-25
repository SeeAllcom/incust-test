import { Component, OnInit } from '@angular/core';
import { DataService, Item } from '../services/data.service';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { ModalController } from '@ionic/angular';
import { ThemeSwitcherComponent } from '../dialogs/theme-switcher/theme-switcher.component';
import { finalize } from 'rxjs/operators';

const SEARCH_STORAGE_KEY = 'searchItemValue';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  items$: Observable<Item[]> = null;

  searchbarValue: string;

  constructor(
    private data: DataService,
    private storageService: StorageService,
    private modalController: ModalController,
  ) {
  }

  get isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  ngOnInit() {
    this.getItems();

    this.storageService.get(SEARCH_STORAGE_KEY).then((value) => {
      if (!value) {
        return;
      }

      this.searchbarValue = value;
    });
  }

  getItems(): void {
    this.items$ = this.data.getItems$();
  }

  refresh(ev) {
    this.items$ = this.data.getItems$().pipe(finalize(() => ev.detail.complete()));
  }

  saveSearchValue(event) {
    const value = event.detail.value;
    this.searchbarValue = value;
    this.storageService.set(SEARCH_STORAGE_KEY, value);
  }

  async openThemeSwitcher() {
    const modalBreakpoints = {
      initial: 0,
      half: 0.3,
      finish: 0.5,
    };
    const modal = await this.modalController.create({
      component: ThemeSwitcherComponent,
      breakpoints: [
        modalBreakpoints.initial,
        modalBreakpoints.half,
        modalBreakpoints.finish,
      ],
      swipeToClose: true,
      initialBreakpoint: modalBreakpoints.half,
    });

    return await modal.present();
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { ItemComponentModule } from '../item/item.module';
import { PipesModule } from '../shared/pipes/pipes.module';
import { ThemeSwitcherComponent } from '../dialogs/theme-switcher/theme-switcher.component';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemComponentModule,
    HomePageRoutingModule,
    PipesModule,
    MatRippleModule
  ],
  declarations: [
    HomePage,
    ThemeSwitcherComponent,
  ],
})
export class HomePageModule {
}

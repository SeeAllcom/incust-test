import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewItemPage } from './view-item-page.component';

import { IonicModule } from '@ionic/angular';
import { ViewItemPageRoutingModule } from './view-item-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DirectivesModule } from '../shared/directives/directives.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ViewItemPageRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        DirectivesModule,
    ],
  declarations: [ViewItemPage]
})
export class ViewItemPageModule {}

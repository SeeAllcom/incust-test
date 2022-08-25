import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemPipe } from './search-item.pipe';



@NgModule({
    declarations: [
        SearchItemPipe
    ],
    exports: [
        SearchItemPipe
    ],
    imports: [
        CommonModule
    ]
})
export class PipesModule { }

import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../../services/data.service';

@Pipe({
  name: 'searchItem'
})
export class SearchItemPipe implements PipeTransform {

  transform(items: Item[], value: string): Item[] {
    if (!value || !value?.length || !items?.length) {
      return items;
    }

    return items.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
  }

}

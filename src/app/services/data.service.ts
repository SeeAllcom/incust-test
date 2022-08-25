import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item {
  sku: number;
  name: string;
  type: string;
  price: number;
  upc: string;
  category: ItemCategory[];
  shipping: number;
  description: string;
  manufacturer: string;
  model: string;
  url: string;
  image: string;
}

export interface ItemCategory {
  id: string;
  name: string;
}

@Injectable({providedIn: 'root'})
export class DataService {
  private items$ = this.http.get<Item[]>('/assets/db.json');

  constructor(
    private http: HttpClient,
  ) { }

  public getItems$(): Observable<Item[]> {
    return this.items$;
  }

  public getItemId$(upc: string): Observable<Item> {
    return this.items$.pipe(map((items) => {
      return items.find((item) => item.upc === upc);
    }));
  }
}

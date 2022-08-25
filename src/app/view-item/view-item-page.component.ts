import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Item } from '../services/data.service';
import { combineLatest, Observable, of } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounce, debounceTime, filter, skip, switchMap, tap } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-view-item',
  templateUrl: './view-item-page.component.html',
  styleUrls: ['./view-item-page.component.scss'],
})
export class ViewItemPage implements OnInit {
  public item$: Observable<Item>;

  formItem: FormGroup = this.fb.group({
    amount: this.fb.control(''),
    quantity: this.fb.control(''),
  });

  private item: Item = null;

  constructor(
    private data: DataService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
  }

  get returnFromAmount(): number {
    const amount = +this.formControl('amount').value;
    const quantity = +this.formControl('quantity').value;
    const priceByQuantity = this.item.price * quantity;

    if (!amount || !quantity || priceByQuantity > amount) {
      return null;
    }
    return +(amount - priceByQuantity).toFixed(2);
  }

  get backButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Products' : '';
  }

  ngOnInit() {
    const upc = this.activatedRoute.snapshot.paramMap.get('upc');
    this.item$ = this.data.getItemId$(upc).pipe(tap((item) => this.item = item));
  }

  public setAmount(amount: number) {
    const quantityResult = Math.floor(amount / +this.item.price);
    this.setControlValue(quantityResult, amount);
  }

  public setQuantity(quantity: number) {
    this.setControlValue(quantity, this.item.price * quantity);
  }

  formControl(name: string) {
    return this.formItem.get(name);
  }

  setControlValue(quantity: number, amount: number) {
    this.formControl('amount').patchValue(amount.toFixed(2));
    this.formControl('quantity').patchValue(quantity);
  };
}

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ViewMessagePageRoutingModule } from './view-message-routing.module';

import { ViewItemPage } from './view-item-page.component';

describe('ViewMessagePage', () => {
  let component: ViewItemPage;
  let fixture: ComponentFixture<ViewItemPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewItemPage ],
      imports: [IonicModule.forRoot(), ViewMessagePageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

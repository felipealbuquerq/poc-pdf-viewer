import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OverlayPDFBottomComponent } from './overlay-pdf-bottom.component';

describe('OverlayPDFBottomComponent', () => {
  let component: OverlayPDFBottomComponent;
  let fixture: ComponentFixture<OverlayPDFBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayPDFBottomComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OverlayPDFBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { OverlayPDFBottomComponent } from './overlay-pdf-bottom.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [OverlayPDFBottomComponent],
  exports: [
    OverlayPDFBottomComponent
  ]
})
export class OverlayPDFBottomComponentModule {}

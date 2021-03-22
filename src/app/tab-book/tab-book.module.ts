import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabBookPage } from './tab-book.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabBookPageRoutingModule } from './tab-book-routing.module';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PinchZoomModule } from 'ngx-pinch-zoom';

import { OverlayPDFBottomComponentModule } from '../overlay-pdf-bottom/overlay-pdf-bottom.component.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabBookPageRoutingModule,
    PdfViewerModule,
    PinchZoomModule,
    OverlayPDFBottomComponentModule
  ],
  declarations: [TabBookPage],
  schemas: []
})
export class TabBookPageModule {}

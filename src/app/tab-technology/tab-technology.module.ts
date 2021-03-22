import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabTechnologyPage } from './tab-technology.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabTechnologyPageRoutingModule } from './tab-technology-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabTechnologyPageRoutingModule
  ],
  declarations: [TabTechnologyPage]
})
export class TabTechnologyPageModule {}

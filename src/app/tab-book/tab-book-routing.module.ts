import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabBookPage } from './tab-book.page';

const routes: Routes = [
  {
    path: '',
    component: TabBookPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabBookPageRoutingModule {}

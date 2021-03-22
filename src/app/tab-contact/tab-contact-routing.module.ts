import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabContactPage } from './tab-contact.page';

const routes: Routes = [
  {
    path: '',
    component: TabContactPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabContactPageRoutingModule {}

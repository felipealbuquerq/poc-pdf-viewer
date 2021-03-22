import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-technology',
        loadChildren: () => import('../tab-technology/tab-technology.module').then(m => m.TabTechnologyPageModule)
      },
      {
        path: 'tab-book',
        loadChildren: () => import('../tab-book/tab-book.module').then(m => m.TabBookPageModule)
      },
      {
        path: 'tab-contact',
        loadChildren: () => import('../tab-contact/tab-contact.module').then(m => m.TabContactPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab-technology',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab-technology',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

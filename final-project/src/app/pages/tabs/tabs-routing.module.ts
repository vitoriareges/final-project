import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
   children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
          }
        ]  
  },
{
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
          }
        ]
      }
    ]
},
  
   {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

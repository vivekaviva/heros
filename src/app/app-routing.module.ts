import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHerosComponent } from './list-heros/list-heros.component';

const routes: Routes = [
  {path:'',component: ListHerosComponent},
  {path: 'user',    loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

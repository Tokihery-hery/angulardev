import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { FoodComponent } from './android-design/food/food.component';
import { TravelComponent } from './android-design/travel/travel.component';
import { PickinicComponent } from './android-design/pickinic/pickinic.component';
import { PlovenatioraComponent } from './android-design/plovenatiora/plovenatiora.component';
import { MenuComponent } from './android-design/menu/menu.component';
import { ApkListComponent } from './android-design/apk-list/apk-list.component';
import { SmsComponent } from './android-design/sms/sms.component';
import { SearchGoogleComponent } from './android-design/search-google/search-google.component';
import {OtherComponent} from './android-design/other/other.component'
const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
    {
      path:'sms',
      component:SmsComponent
    },
    {
      path:'other',
      component:OtherComponent
    }
  ]
  },
  {
    path: 'lovenatiora',
    component: PlovenatioraComponent,
    children: [
      {
        path: 'food',
        component: FoodComponent
      },
      {
        path: 'travel',
        component: TravelComponent
      },
      {
        path: 'picnik',
        component: PickinicComponent
      },
    ]
  },
  {
    path: 'chat',
    component: ChatComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

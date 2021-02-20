import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { CrudjsonComponent } from './crud/crudjson/crudjson.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrudmysqlComponent } from './crud/crudmysql/crudmysql.component';
import { UploadFileImgComponent } from './upload-file-img/upload-file-img.component';
import { ChatComponent } from './chat/chat.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { AndroidDesignComponent } from './android-design/android-design.component';
import { FoodComponent } from './android-design/food/food.component';
import { TravelComponent } from './android-design/travel/travel.component';
import { PickinicComponent } from './android-design/pickinic/pickinic.component';
import { FooterComponent } from './android-design/footer/footer.component'
import { materialize } from 'rxjs/operators';
import { RxjsComponent } from './apprenti/rxjs/rxjs.component';
import { PlovenatioraComponent } from './android-design/plovenatiora/plovenatiora.component';
import { MenuComponent } from './android-design/menu/menu.component';
import { ApkListComponent } from './android-design/apk-list/apk-list.component';
import { SmsComponent } from './android-design/sms/sms.component';
import { SearchGoogleComponent } from './android-design/search-google/search-google.component';
import { OtherComponent } from './android-design/other/other.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudjsonComponent,
    CrudmysqlComponent,
    UploadFileImgComponent,
    ChatComponent,
    AndroidDesignComponent,
    FoodComponent,
    TravelComponent,
    PickinicComponent,
    FooterComponent,
    RxjsComponent,
    PlovenatioraComponent,
    MenuComponent,
    ApkListComponent,
    SmsComponent,
    SearchGoogleComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatIconModule,
    MatListModule
  ],
  exports:[FoodComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

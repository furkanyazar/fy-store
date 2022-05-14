import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CartComponent } from './components/cart/cart.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    TopbarComponent,
    NavbarComponent,
    FooterComponent,
    VatAddedPipe,
    ContactComponent,
    HomeComponent,
    FilterPipe,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxScrollTopModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right"
    }),
    BrowserAnimationsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

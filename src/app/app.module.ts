import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WalletComponent } from './wallet/wallet.component';
import { WalletDirective } from './wallet.directive';
import { ethers } from 'ethers';

@NgModule({
  declarations: [
    AppComponent,
    WalletComponent,
    WalletDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

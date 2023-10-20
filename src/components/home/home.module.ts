import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { MainNoticeComponent } from '../mainNotice/mainNotice.component';

@NgModule({
  declarations: [HomeComponent, MainNoticeComponent],
  imports: [CommonModule],
  exports: [HomeComponent, MainNoticeComponent],
})
export class HomeModule {}

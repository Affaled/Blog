import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { MainNoticeComponent } from '../mainNotice/mainNotice.component';
import { NoticeComponent } from '../notice/notice.component';

@NgModule({
  declarations: [HomeComponent, MainNoticeComponent, NoticeComponent],
  imports: [CommonModule, RouterModule],
  exports: [HomeComponent, MainNoticeComponent, NoticeComponent],
})
export class HomeModule {}

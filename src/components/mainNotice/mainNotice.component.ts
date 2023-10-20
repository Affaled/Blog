import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-notice',
  templateUrl: './mainNotice.component.html',
  styleUrls: ['./mainNotice.component.scss'],
})
export class MainNoticeComponent implements OnInit {
  @Input()
  noticePhoto: string = '';
  @Input()
  noticeTitle: string = '';
  @Input()
  noticeContent: string = '';
  @Input()
  Id: number = 0;

  constructor() {}
  ngOnInit(): void {}
}

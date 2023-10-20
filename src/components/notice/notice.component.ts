import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss'],
})
export class NoticeComponent implements OnInit {
  @Input()
  noticePhoto: string = '';
  @Input()
  noticeTitle: string = '';
  @Input()
  noticeContent: string = '';
  @Input()
  Id: string = '0';

  constructor() {}
  ngOnInit(): void {}
}

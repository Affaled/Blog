import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { data } from 'src/data/data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  contentPhoto: string = '';
  contentTitle: string = '';
  contentContent: string = '';

  private Id: string | null = '0';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.Id = value.get('Id');
    });
  }

  setValuesToComponent(Id: string) {
    const result = data.filter((article) => article.Id == Id)[0];

    this.contentPhoto = result.photo;
    this.contentTitle = result.title;
    this.contentContent = result.content;
  }
}

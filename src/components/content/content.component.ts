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

  private id: number | null = 0;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('Id') ? Number(value.get('Id')) : null;

      this.setValuesToComponent(String(this.id));
    });
  }

  setValuesToComponent(id: string) {
    const result = data.filter((article) => article.Id == id)[0];
    this.contentPhoto = result.photo;
    this.contentTitle = result.title;
    this.contentContent = result.content;
  }
}

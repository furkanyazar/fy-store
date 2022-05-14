import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/constants/title';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Contact - ' + Title)
  }

}

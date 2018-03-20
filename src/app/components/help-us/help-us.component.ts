import { Component, OnInit } from '@angular/core';

import { TitleService } from './../../services/title/title.service';

@Component({
  selector: 'app-help-us',
  templateUrl: './help-us.component.html',
  styleUrls: ['./help-us.component.css']
})
export class HelpUsComponent implements OnInit {

  constructor(titleService: TitleService) {
		titleService.setTitle( 'Help us - Guides LoL' );
	}

  ngOnInit() {
  }

}

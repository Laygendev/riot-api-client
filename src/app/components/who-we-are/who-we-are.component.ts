import { Component, OnInit } from '@angular/core';

import { TitleService } from './../../services/title/title.service';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.css']
})
export class WhoWeAreComponent implements OnInit {

	constructor(titleService: TitleService) {
		titleService.setTitle( 'Who We Are - LoL Hype' );
	}

	ngOnInit() {}

}

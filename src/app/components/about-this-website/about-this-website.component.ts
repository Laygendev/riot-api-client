import { Component, OnInit } from '@angular/core';

import { TitleService } from './../../services/title/title.service';

@Component({
  selector: 'app-about-this-website',
  templateUrl: './about-this-website.component.html',
  styleUrls: ['./about-this-website.component.css']
})
export class AboutThisWebsiteComponent implements OnInit {

	constructor(private titleService: TitleService) {
		titleService.setTitle('About this Website - LoL Hype');
	}

	ngOnInit() {}

}

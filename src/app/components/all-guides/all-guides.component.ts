import { Component, OnInit } from '@angular/core';

import { TitleService } from './../../services/title/title.service';

@Component({
  selector: 'app-all-guides',
  templateUrl: './all-guides.component.html',
  styleUrls: ['./all-guides.component.css']
})
export class AllGuidesComponent implements OnInit {

	constructor(titleService: TitleService) {
		titleService.setTitle( 'All Guides - Guides LoL' );
	}

	ngOnInit() {}

}

import { Component, OnInit } from '@angular/core';

import { TitleService } from './../../services/title/title.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(titleService: TitleService) {
		titleService.setTitle( 'All Members - Guides LoL' );
	}

  ngOnInit() {
  }

}

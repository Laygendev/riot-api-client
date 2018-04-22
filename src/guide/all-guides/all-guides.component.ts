import { Component, OnInit } from '@angular/core';

import { DataService } from './../../services/data/data.service';

import { TitleService } from './../../services/title/title.service';

import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-all-guides',
  templateUrl: './all-guides.component.html',
  styleUrls: ['./all-guides.component.css']
})
export class AllGuidesComponent implements OnInit {

  public gamesMode: String[] = ['ARAM', 'CLASSIC'];
	public currentGameMode: String = 'CLASSIC';

	constructor(
    public dataService: DataService,
    private title: Title) {
		this.title.setTitle( 'All Guides - Guides LoL' );
	}

	ngOnInit() {}

  selectGameMode(gameMode:String): void {
    this.currentGameMode = gameMode;
  }
}

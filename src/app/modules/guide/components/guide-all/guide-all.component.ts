import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { DataService } from '@app/services/data/data.service';

@Component({
  selector: 'app-all-guides',
  templateUrl: './guide-all.component.html',
  styleUrls: ['./guide-all.component.css']
})
export class AllGuidesComponent implements OnInit {

  public gamesMode: String[] = ['ARAM', 'CLASSIC'];
	public currentGameMode: String = 'CLASSIC';

	constructor(
    public dataService: DataService) {
	}

	ngOnInit() {}

  selectGameMode(gameMode:String): void {
    this.currentGameMode = gameMode;
  }
}

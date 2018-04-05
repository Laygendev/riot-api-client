import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ChampionModel } from './../../models/champion.model';

import { DataService } from './../../services/data/data.service';

@Component({
  selector: 'app-guide-page',
  templateUrl: './guide-page.component.html',
  styleUrls: ['./guide-page.component.css']
})
export class GuidePageComponent implements OnInit {
  public champion: ChampionModel = null;
  public gameMode: string = '';

  constructor(
    public route: ActivatedRoute,
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.champion = this.dataService.getChampionByName(param.championName);
      this.gameMode = param.gameMode;
      this.dataService.loading = false;
    });
  }

}

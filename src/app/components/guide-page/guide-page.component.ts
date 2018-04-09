import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

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
    public dataService: DataService,
    private meta: Meta,
    private title: Title
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.champion = this.dataService.getChampionByName(param.championName);
      this.gameMode = param.gameMode;
      this.dataService.loading = false;

      if ( this.dataService && this.dataService.realms ) {
        this.title.setTitle( 'League of Legends Guide - ' + this.dataService.realms.data.v + ' ' + param.championName + ' ' + param.gameMode );
        this.meta.addTag({ name: 'description', content: 'League of Legends Guide - ' + this.dataService.realms.data.v + ' ' + param.championName + ' ' + param.gameMode });
        this.meta.addTag({ name: 'keywords', content: 'League of Legends, Guide, Guide ' + this.dataService.realms.data.v + ', ' + param.championName + ', ' + param.championName + ' ' + param.gameMode + ', ' + param.championName + ' ' + this.dataService.realms.data.v });
      }
    });
  }

}

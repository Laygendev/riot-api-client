import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data/data.service';

import { BuildModel } from '../../models/build.model';
import { ItemModel } from '../../models/item.model';
import { ItemSlotModel } from '../../models/itemSlot.model';

declare var $:any;

@Directive({
  selector: '[appDraganddrop]'
})
export class DragAndDropDirective implements OnInit {
	@Input('appDraganddrop') build: BuildModel;

	constructor(public el: ElementRef, public dataService: DataService) {}

	ngOnInit() {
		$( ".cases" ).sortable( {
			update: (event, ui) => {
				$(".cases li").each( ( key, element ) => {
					let itemId: number = $(element).find('div').attr('id');

					if ( itemId ) {
						this.build.items[key].empty = false;
						console.log(itemId);
						this.build.items[key].item = this.dataService.getItemById(itemId);
					} else {
						this.build.items[key].empty = true;
						this.build.items[key].item = undefined;
					}
				})
			}
		} );
	}

}

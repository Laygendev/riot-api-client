import { Directive, ElementRef, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
declare var $:any;

import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appSearch]'
})
export class SearchDirective {
	constructor(public el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}

	@HostListener('keyup') onKeyDown() {
		this.filterByValue();
	}

	filterByValue() {
    if (isPlatformBrowser(this.platformId)) {
  		var parent = $(this.el.nativeElement).closest('.dropdown-menu');
  		if (this.el.nativeElement.value.length > 0) {
  			parent.find('.item').each((key, item) => {
  				if ($(item).find('span').text().toLowerCase().indexOf(this.el.nativeElement.value.toLowerCase()) >= 0) {
  					$(item).show();
  				} else {
  					$(item).hide();
  				}
  			});

  		} else {
  			parent.find('.item').show();
  		}
    }
	}
}

import { Directive, ElementRef, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Injectable } from '@angular/core';


import { isPlatformBrowser } from '@angular/common';

declare var $:any;

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

	ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
  		$('.dropdown-menu .search').click(function(e) {
  			e.stopPropagation();
  		});
    }
	}

	constructor(public el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}

	@HostListener('click') onClick() {
		this.focusField();
	}

	focusField(): void {
		setTimeout(() => {
      if (isPlatformBrowser(this.platformId)) {
  			$(this.el.nativeElement).closest('.dropdown').find('input[type="text"]').focus();
      }
		}, 100 );

	}

}

import { Directive, ElementRef, OnInit, Input, HostListener } from '@angular/core';
declare var $:any;

@Directive({
  selector: '[appSearch]'
})
export class SearchDirective implements OnInit {
	constructor(public el: ElementRef) {}

	ngOnInit() {

	}

	@HostListener('keyup') onKeyDown() {
		if ( $('input[type="text"]').val().length > 0 ) {

			$('.items li').each(function() {
				if ($(this).find('span').text().indexOf($('input[type="text"]').val()) >= 0) {
					$(this).show();
				} else {
					$(this).hide();
				}
			});

		} else {
			$('.items li').show();
		}
	}
}

import { Directive, ElementRef, HostListener } from '@angular/core';
declare var $:any;

@Directive({
  selector: '[appSearch]'
})
export class SearchDirective {
	constructor(public el: ElementRef) {}

	@HostListener('keyup') onKeyDown() {
		this.filterByValue();
	}

	filterByValue() {
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

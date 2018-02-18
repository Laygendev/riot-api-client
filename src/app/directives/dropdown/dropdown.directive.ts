import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

declare var $:any;

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

	ngOnInit(): void {
		$('.dropdown-menu .search').click(function(e) {
			e.stopPropagation();
		});
	}

	constructor(public el: ElementRef) {}

	@HostListener('click') onClick() {
		this.focusField();
	}

	focusField(): void {
		setTimeout(() => {
			$(this.el.nativeElement).closest('.dropdown').find('input[type="text"]').focus();
		}, 100 );

	}

}

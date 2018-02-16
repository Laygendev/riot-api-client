import { Directive, ElementRef, HostListener } from '@angular/core';

declare var $:any;

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

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

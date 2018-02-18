import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

declare var $:any;

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnInit {

	constructor(public el: ElementRef) {}

	ngOnInit(): void {
	}
}

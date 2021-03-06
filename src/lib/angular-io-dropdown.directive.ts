import { Output, OnInit, HostListener, Directive, Inject, EventEmitter, Input, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[dropdown]'
})
export class AngularioDropdownDirective implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any, public elementRef: ElementRef) {}

  clickOutsideEvent: any;
  dropdownOpen: boolean;
  clickHost: any;
  eventListenerFired = false;

  @Input()
  get dropdown() {
    return this.dropdownOpen;
  }
  @Output() dropdownChange: EventEmitter<boolean> = new EventEmitter();
  set dropdown(val) {
    this.dropdownOpen = val;
  }
  @HostListener('click', ['$event']) onClick(event: Event) {
    this.assignHost();
    if (this.eventListenerFired && !this.dropdown ) {
      this.executeClickOutside(event);
      this.eventListenerFired = false;
    } else {
      if (!this.dropdown) {
        this.executeClickInside();
        this.bindClickOutside();
      }
    }
  }
  assignHost(): void {
    this.clickHost = this.elementRef.nativeElement;
  }

  checkIfDropdownIsOpen(): void {
    if (this.dropdown) {
      this.bindClickOutside();
    }
  }
  executeClickInside(): void {
    this.dropdown = true;
    this.dropdownChange.emit(this.dropdown);
  }
  executeClickOutside = (event: Event) => {
    if (!this.isChildInParent(event.target, this.clickHost)) {
      this.dropdown = false;
      this.dropdownChange.emit(this.dropdown);
      this.document.body.removeEventListener('click', this.executeClickOutside);
      this.eventListenerFired = false;
    }
  }

  isChildInParent(child: any, parent: any, ): boolean {
    let node = child.parentNode;
    while (node != null) {
        if (node === parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
  }

  bindClickOutside(): void {
    this.document.body.addEventListener('click', this.executeClickOutside);
    this.eventListenerFired = true;
  }

  ngOnInit() {
    this.assignHost();
    this.checkIfDropdownIsOpen();
  }
}

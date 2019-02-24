import { NgModule } from '@angular/core';
import { AngularioDropdownDirective } from './angular-io-dropdown.directive';
import { AngularIoDropdownService } from './angular-io-dropdown.service';

@NgModule({
  declarations: [AngularioDropdownDirective],
  exports: [AngularioDropdownDirective],
  providers: [AngularIoDropdownService]
})
export class AngularioDropdownModule { }

import { Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicHost]'
})
export class DynamicDirective {
  
  @Input() data;
  
  // Esta directiva permite ser el host para un componente dinámico
  constructor(public viewContainerRef: ViewContainerRef) { }

}

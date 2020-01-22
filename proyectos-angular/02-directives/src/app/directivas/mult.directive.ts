import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMult]'
})
export class MultDirective {

  @Input() set appMult(numero: number) {
    for (let i = 0; i < numero; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }
}

import { Directive , Input, TemplateRef, ViewContainerRef ,ElementRef} from '@angular/core';

@Directive({
  selector: '[Show]'
})
export class ShowDirective {

  constructor(public template: TemplateRef<any>, public containerRef:ViewContainerRef, public el:ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
   }

  rendered = false;

  @Input() set show(value: any){
    if(!value && !this.rendered){
      this.containerRef.createEmbeddedView(this.template);
    }else if(!value && this.rendered) {
      this.containerRef.clear();
    }
  }

}

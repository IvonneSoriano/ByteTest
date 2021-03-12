import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from './components/dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("vf", {read: ViewContainerRef}) vf:ViewContainerRef
  title = 'jtellertest';
  
  constructor(private componentFactoryResolver:ComponentFactoryResolver){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
 
  }


  // https://stackblitz.com/edit/angular-ivy-dynamic-components-demo2?file=src%2Fapp%2Fapp.component.html

  //Para mandar a crear cuando todo esté hecho
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.createComponent()
  }

  createComponent(): void {
    const component = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
    DynamicComponent.arguments("Hola");
    this.vf.createComponent(component);
  }
  
}

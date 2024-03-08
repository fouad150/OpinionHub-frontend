import {Component, ElementRef} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css'],
})
export class PublicationListComponent {
  icon: any = {};
  iconChecked:boolean=false;
  constructor(private elementRef: ElementRef ) {
  }

  changeLikeIconColor(element: HTMLElement) {

    if(!this.iconChecked){
      element.style.color = 'red';
      this.iconChecked=true;
    }else{
      element.style.color= '#012970d4';
      this.iconChecked=false;
    }

  }

}

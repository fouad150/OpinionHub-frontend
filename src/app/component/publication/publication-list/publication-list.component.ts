import {Component, ElementRef, OnInit,} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css'],
})

export class PublicationListComponent implements OnInit{
  icon: any = {};
  iconChecked:boolean=false;
  constructor(private elementRef: ElementRef) {
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

  isTruncated: boolean = true;
  truncatedText: string = '';
  fullText: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.`;
  buttonText: string = '...more';

  ngOnInit(): void {
    this.truncateText();
  }

  toggleTruncate(): void {
    this.isTruncated = !this.isTruncated;
    if (this.isTruncated) {
      this.truncateText();
      this.buttonText = '...more';
    } else {
      this.truncatedText = this.fullText;
      this.buttonText = 'show less';
    }
  }

  truncateText(): void {
    const words = this.fullText.split(' ');
    if (words.length > 15) {
      this.truncatedText = words.slice(0, 15).join(' ') /*+ '...'*/;
    } else {
      this.truncatedText = this.fullText;
    }
  }
}

import {Component, ElementRef, OnInit,} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PublicationService} from "../../../service/publication.service";

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css'],
})

export class PublicationListComponent implements OnInit{
  icon: any = {};
  iconChecked:boolean=false;
  constructor(private elementRef: ElementRef, private publicationService:PublicationService,private router:Router) {
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


  /*show more or less*/
  /*isTruncated: boolean = true;
  truncatedText: string = '';
  fullText: string = '';
  buttonText: string = '...more';*/



  ngOnInit(): void {
/*
    this.truncateText();
*/
    this.getPublications();
  }

  getPublications(): void {
    this.publicationService.getPublications().subscribe(publications => {
      this.publications = publications;
      // Truncate long texts
      this.publications.forEach(publication => {
        publication.displayText = this.truncateText(publication.text, 75);
      });
    });
  }

  truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    } else {
      return text;
    }
  }

  toggleText(publication: any): void {
    if (publication.displayText === publication.text) {
      // If full text is displayed, show truncated text
      publication.displayText = this.truncateText(publication.text, 75);
    } else {
      // If truncated text is displayed, show full text
      publication.displayText = publication.text;
    }
  }

  /*toggleTruncate(): void {
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
      this.truncatedText = words.slice(0, 15).join(' ') /!*+ '...'*!/;
    } else {
      this.truncatedText = this.fullText;
    }
  }*/

  //get publications
  publications: any[]=[];

 /* getPublications(): void {
    this.publicationService.getPublications().subscribe(publications => {
      this.publications = publications;
    });
  }*/

  /*add post*/
  postData = {
    text: '',
    image: null as File | null
  };

  onFileSelected(event: any) {
    this.postData.image = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('text', this.postData.text);
    if(this.postData.text == undefined){
      this.postData.text=="";
    }
    if (this.postData.image) {
      formData.append('image', this.postData.image);
    }

    this.publicationService.createPublication(formData).subscribe(
    response => {
        this.publications.push(response.publication);
        window.location.href = 'http://localhost:4200/publications';
        console.log('Post added successfully:', response);
      },
      error => {
        alert(error.error.detail)
        console.error('Error adding post:', error);
      }
    );
  }
}

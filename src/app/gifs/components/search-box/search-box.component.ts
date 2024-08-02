import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gif.service';

@Component({
  selector: 'gif-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)= "searchTag()"
      #txtTagInput
      >
  `
})

export class SearchBoxComponent {
  constructor( private gifsService: GifsService) { }

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  // searchTag ( newTag: string) {
  searchTag(){
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag( newTag );

    this.tagInput.nativeElement.value = '';
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPublicationComponent } from './add-edit-publication.component';

describe('AddEditPublicationComponent', () => {
  let component: AddEditPublicationComponent;
  let fixture: ComponentFixture<AddEditPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditPublicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

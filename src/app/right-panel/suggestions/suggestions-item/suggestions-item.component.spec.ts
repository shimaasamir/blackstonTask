import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsItemComponent } from './suggestions-item.component';

describe('SuggestionsItemComponent', () => {
  let component: SuggestionsItemComponent;
  let fixture: ComponentFixture<SuggestionsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

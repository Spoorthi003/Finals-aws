import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCompositeComponent } from './book-composite.component';

xdescribe('BookCompositeComponent', () => {
  let component: BookCompositeComponent;
  let fixture: ComponentFixture<BookCompositeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCompositeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCompositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

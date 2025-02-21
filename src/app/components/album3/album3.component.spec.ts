import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Album3Component } from './album3.component';

describe('Album3Component', () => {
  let component: Album3Component;
  let fixture: ComponentFixture<Album3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Album3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Album3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

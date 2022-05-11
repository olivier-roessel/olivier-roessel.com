import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoireSourcesComponent } from './memoire-sources.component';

describe('MemoireSourcesComponent', () => {
  let component: MemoireSourcesComponent;
  let fixture: ComponentFixture<MemoireSourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoireSourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoireSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

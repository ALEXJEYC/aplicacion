import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RevisarPage } from './revisar.page';

describe('RevisarPage', () => {
  let component: RevisarPage;
  let fixture: ComponentFixture<RevisarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RevisarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

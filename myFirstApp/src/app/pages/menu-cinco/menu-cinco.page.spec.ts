import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuCincoPage } from './menu-cinco.page';

describe('MenuCincoPage', () => {
  let component: MenuCincoPage;
  let fixture: ComponentFixture<MenuCincoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuCincoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

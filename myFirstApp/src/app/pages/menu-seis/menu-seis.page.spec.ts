import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuSeisPage } from './menu-seis.page';

describe('MenuSeisPage', () => {
  let component: MenuSeisPage;
  let fixture: ComponentFixture<MenuSeisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuSeisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

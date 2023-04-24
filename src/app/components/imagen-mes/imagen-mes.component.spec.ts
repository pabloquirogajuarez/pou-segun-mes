import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenMesComponent } from './imagen-mes.component';

describe('ImagenMesComponent', () => {
  let component: ImagenMesComponent;
  let fixture: ComponentFixture<ImagenMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenMesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

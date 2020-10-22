import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatProduitsPage } from './cat-produits.page';

describe('CatProduitsPage', () => {
  let component: CatProduitsPage;
  let fixture: ComponentFixture<CatProduitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatProduitsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatProduitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

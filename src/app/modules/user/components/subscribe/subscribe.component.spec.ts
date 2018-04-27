import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataService } from '@app/services/data/data.service';
import { StaticDataService } from '@app/services/staticData/static-data.service';
import { HttpUserService } from '@app/modules/user/services/http-user/http-user.service';

import { SubscribeComponent } from './subscribe.component';

describe('SubscribeComponent', () => {
  let component: SubscribeComponent;
  let fixture: ComponentFixture<SubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeComponent ],
			providers: [
				DataService,
				StaticDataService,
				HttpUserService
			],
			imports: [
				ReactiveFormsModule,
				FormsModule,
				RouterTestingModule,
				HttpClientModule
			]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

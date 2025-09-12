import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardChart } from './dashboard-charts';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DashboardService } from '../../../services/dashboard-service';

describe('DashboardChart', () => {
  let component: DashboardChart;
  let fixture: ComponentFixture<DashboardChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, DashboardChart],
      providers: [DashboardService],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

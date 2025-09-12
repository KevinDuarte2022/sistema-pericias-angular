import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RegistrationsService } from '../../services/registrations-service';

describe('RegistrationsService', () => {
  let service: RegistrationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegistrationsService],
    });
    service = TestBed.inject(RegistrationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

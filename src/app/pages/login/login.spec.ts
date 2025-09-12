import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Login } from './login';
import { AuthService } from '../../services/auth.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    authServiceSpy = jasmine.createSpyObj<AuthService>('AuthService', ['login', 'user']);
    authServiceSpy.login.and.returnValue(of({ token: '123' }));
    authServiceSpy.user.and.returnValue({ username: 'admin' });

    await TestBed.configureTestingModule({
      imports: [FormsModule, Login, HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        MessageService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar', () => {
    expect(component).toBeTruthy();
  });

  it('deve chamar AuthService.login ao submeter', () => {
    component.username = 'admin';
    component.password = '123';
    component.doLogin();
    expect(authServiceSpy.login).toHaveBeenCalled();
  });
});

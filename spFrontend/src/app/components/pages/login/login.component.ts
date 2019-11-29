import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// SERVICES
import { UserService } from 'src/app/services/user/user.service';
import { UserLogin } from 'src/app/models/userLogin/userLogin.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  errorLogin: string;

  constructor(private router: Router,
              private fb: FormBuilder,
              private userService: UserService) { }

  ngOnInit() {
    sessionStorage.clear();

    this.formLogin = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async onSubmit() {

    try {
      this.errorLogin = '';
      const user: UserLogin = {
        name: this.formLogin.get('name').value,
        password: this.formLogin.get('name').value
      };

      const isLogin = await this.userService.login(user);

      if (isLogin) {
        this.router.navigate(['/', 'home']);
      }
    } catch (error) {
      console.log('Error ', error);
      if (error && error.status === 403) {
        this.errorLogin = 'Usuario o contraseña incorrectos';
      } else {
        this.errorLogin = (error && error.message) ? error.message : 'Internal server error';
      }
    }

  }

  goToHome() {

    this.router.navigate(['/', 'home']);

  }
}
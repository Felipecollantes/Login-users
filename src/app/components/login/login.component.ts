import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})


export class LoginComponent implements OnInit {
public loginForm: FormGroup;
public PATTERN_EMAIL = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.PATTERN_EMAIL)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  /**
   * Method to login the user in firebase
   */
  loginUser() {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;
    this.authService
      .loginUser(email, password)
      .then(() => {
        this.router.navigate(['/usuarios']);
      })
      .catch(() => {
        Swal.fire({
          html: 'Usuario o contraseña incorrectos.',
          timer: 2000,
        });
      });
  }

  /**
   * Method to navigate to registration screen
   */
  navigateRegister() {
    this.router.navigate(['/register']);
  }

  /**
   * Method to return the email
   * @returns the email
   */
  getEmail() {
    return this.loginForm.get('email');
  }

  /**
   * Method to return the password
   * @returns the password
   */
  getPassword() {
    return this.loginForm.get('password');
  }

  /**
   * Method that controls if the input is valid and touched
   * @returns the error
   */
   getEmailInvalid() {
    return (
      this.loginForm.get('email').invalid &&
      this.loginForm.get('email').touched
    );
  }

  /**
   * Method that controls if the input is valid and touched
   * @returns the error
   */
   getPasswordInvalid() {
    return (
      this.loginForm.get('password').invalid &&
      this.loginForm.get('password').touched
    );
  }
}

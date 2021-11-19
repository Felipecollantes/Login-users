import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public PATTERN_EMAIL =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.PATTERN_EMAIL)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  /**
   * Method to register the user in firebase
   * @returns
   */
  createUser() {
    if (this.registerForm.invalid) {
      return;
    }

    const { email, password } = this.registerForm.value;
    this.authService
      .createUser(email, password)
      .then(() => {
        this.router.navigate(['/usuarios']);
      })
      .catch(() => {
        Swal.fire({
          html: 'El correo ya existe.',
          timer: 2000,
        });
      });
  }

  /**
   * Method to navigate to login screen
   */
  navigateLogin() {
    this.router.navigate(['/login']);
  }

  /**
   * Method to return the email
   * @returns the email
   */
  getEmail() {
    return this.registerForm.get('email');
  }

  /**
   * Method to return the password
   * @returns the password
   */
  getPassword() {
    return this.registerForm.get('password');
  }

  /**
   * Method that controls if the input is valid and touched
   * @returns the error
   */
   getEmailInvalid() {
    return (
      this.registerForm.get('email').invalid &&
      this.registerForm.get('email').touched
    );
  }

  /**
   * Method that controls if the input is valid and touched
   * @returns the error
   */
   getPasswordInvalid() {
    return (
      this.registerForm.get('password').invalid &&
      this.registerForm.get('password').touched
    );
  }
}

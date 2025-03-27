import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.email),
      password: new FormControl(),
    });
  }
  onSubmit() {
    this.userService.register(this.registrationForm.value).subscribe((msg) => {
      console.log(msg);
      alert(msg.message);
      this.router.navigateByUrl('/login');
    });
    console.log(this.registrationForm.value);
    this.registrationForm.reset();
  }
}

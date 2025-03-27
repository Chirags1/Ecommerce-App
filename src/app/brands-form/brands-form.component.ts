import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrandServiceService } from '../services/brand-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-brands-form',
  imports: [
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatButtonModule,
    FormsModule,
    NgIf,
    MatInputModule,
  ],
  templateUrl: './brands-form.component.html',
  styleUrl: './brands-form.component.css',
})
export class BrandsFormComponent implements OnInit {
  name = '';
  isEdit = false;
  updateId!: string;

  constructor(
    private brandservice: BrandServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params['id'] + '' + params['name']);
      if (params['id']) {
        this.isEdit = true;
        this.updateId = params['id'];
      }
    });
  }

  submit() {
    if (this.isEdit) {
      this.brandservice
        .updateBrand(this.updateId, { name: this.name })
        .subscribe((msg) => {
          alert(msg.message);
          this.router.navigateByUrl('/brands');
        });
    } else {
      this.brandservice.addBrand({ name: this.name }).subscribe((msg) => {
        alert(msg.message);
        this.name = '';
      });
    }
  }
}

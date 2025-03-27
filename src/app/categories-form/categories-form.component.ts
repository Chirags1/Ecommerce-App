import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CategoryServiceService } from '../services/category-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-categories-form',
  imports: [MatFormField, MatButtonModule, MatInputModule, FormsModule, NgIf],
  templateUrl: './categories-form.component.html',
  styleUrl: './categories-form.component.css',
})
export class CategoriesFormComponent implements OnInit {
  name = '';
  isEdit = false;
  updatedId!: string;
  constructor(
    private category: CategoryServiceService,
    private router: Router,
    private activatedR: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedR.params.subscribe((params) => {
      console.log(params['id']); // Get the value of 'id' from the URL
      if (params['id']) {
        this.isEdit = true;
        this.updatedId = params['id'];
      }
    });
  }

  submit() {
    // console.log(this.name);
    // this.category.addCategory({ name: this.name }).subscribe((msg) => {
    //   console.log(msg);
    //   window.alert(msg.message);
    //   this.router.navigateByUrl('/categories');
    // });
    // this.name = '';

    if (this.isEdit) {
      console.log('update');
      this.category
        .updateCategory(this.updatedId, { name: this.name })
        .subscribe((msg) => {
          alert(msg.message);
          this.router.navigateByUrl('/categories');
        });
    } else {
      console.log(this.name);
      this.category.addCategory({ name: this.name }).subscribe((msg) => {
        console.log(msg);
        window.alert(msg.message);
        this.router.navigateByUrl('/categories');
      });
      this.name = '';
    }
  }
}

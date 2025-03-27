import { NgFor, NgIf } from '@angular/common';
import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { CategoryServiceService } from '../services/category-service.service';
import { category } from '../models/category';
import { MatSelectModule } from '@angular/material/select';
import { BrandServiceService } from '../services/brand-service.service';
import { Brand } from '../models/brand';
import { ProductServiceService } from '../services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-product-form',
  imports: [
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatLabel,
    MatInput,
    MatButtonModule,
    NgFor,
    MatSelectModule,
    NgIf,
    MatCheckboxModule,
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  categories: category[] = [];
  brands: Brand[] = [];
  editId!: string;
  isEdit = false;

  constructor(
    private categoriesService: CategoryServiceService,
    private brandService: BrandServiceService,
    private productService: ProductServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.editId = params['id'];
        this.isEdit = true;
        this.productService.getOneProduct(this.editId).subscribe((data) => {
          this.productForm.patchValue(data);
        });
      }
    });
  }
  ngOnInit(): void {
    this.initializeForm();
    this.getCategories();
    this.getBrand();
  }

  getCategories() {
    this.categoriesService.getAllCategory().subscribe((data) => {
      this.categories = data;
    });
  }
  onSubmit() {
    if (this.isEdit) {
      this.productService
        .updateProduct(this.editId, this.productForm.value)
        .subscribe((msg) => {
          alert(msg.message);
          this.router.navigateByUrl('/product');
        });
    } else {
      this.productService
        .addProduct(this.productForm.value)
        .subscribe((msg) => {
          alert(msg.message);
          this.router.navigateByUrl('/product');
        });
    }
  }
  initializeForm() {
    this.productForm = new FormGroup({
      productName: new FormControl(''),
      shortDescription: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(''),
      discount: new FormControl(),
      image: new FormArray([]),
      categoryId: new FormControl(),
      brandId: new FormControl(),
      isFeatured: new FormControl(false),
      IsNew: new FormControl(false),
    });
  }
  get images() {
    return this.productForm.get('image') as FormArray;
  }
  addImage() {
    this.images.push(new FormControl(''));
  }
  removeImage(index: number) {
    this.images.removeAt(index);
  }
  onFileChange(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      this.convertToBase64(file).then((base64Image: string) => {
        this.images.at(index).setValue(base64Image);
      });
    }
  }

  getBrand() {
    this.brandService.getData().subscribe((data) => {
      console.log(data);
      this.brands = data;
    });
  }

  convertToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Read the file as Data URL (Base64)
      reader.onload = () => {
        resolve(reader.result as string); // Return Base64 string on success
      };
      reader.onerror = (error) => {
        reject(error); // Reject on error
      };
    });
  }
}

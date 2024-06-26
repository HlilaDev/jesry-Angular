import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { AddBookComponent } from './books/add-book/add-book.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { AllBooksComponent } from './books/all-books/all-books.component';
import { AddAuthorComponent } from './authors/add-author/add-author.component';
import { EditAuthorComponent } from './authors/edit-author/edit-author.component';
import { AllAuthorsComponent } from './authors/all-authors/all-authors.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category.component';
import { AllCategoriesComponent } from './categories/all-categories/all-categories.component';
import { FormsModule } from '@angular/forms';
import { LibraryManagementComponent } from './library-management/library-management.component';
import { MyLibraryComponent } from './my-library/my-library.component';


@NgModule({
  declarations: [
    AddBookComponent,
    EditBookComponent,
    AllBooksComponent,
    AddAuthorComponent,
    EditAuthorComponent,
    AllAuthorsComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    AllCategoriesComponent,
    LibraryManagementComponent,
    MyLibraryComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    FormsModule,
  ]
})
export class LibraryModule { }

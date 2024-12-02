import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Book } from './shared/book.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books: Book[] = [
    new Book('Le Gai Savoir', true),
    new Book('Contes Andersen', false),
    new Book('Émile, ou De l’éducation', true)
  ];

  logBooks(): void {
    console.log(this.books);
  }
  
}
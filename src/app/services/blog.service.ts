import { Injectable } from '@angular/core';
import { Blog, Post, PostCategory } from '../models/blog';
import { BLOG } from '../../data/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  insiemeDiTuttiIDati: Blog = BLOG;

  preferiti: Post[] = [];

  selectedCategory?: PostCategory;

  constructor() { }

  getPosts() {
    this.selectedCategory = undefined;
    return this.insiemeDiTuttiIDati.posts;
  }

  getPostsByCategory(category: PostCategory) {
    this.selectedCategory = category;
    return this.insiemeDiTuttiIDati.posts.filter(x => x.category == this.selectedCategory!.id);
  }

  getCategories() {
    return this.insiemeDiTuttiIDati.postCategories;
  }

  aggiungiAPreferiti(post: Post) {
    let p = this.preferiti.find(x => x.id == post.id);

    if (!p) {
      this.preferiti.push(post);
    }
  }

  rimuoviDaPreferiti(post: Post) {
    let p = this.preferiti.find(x => x.id == post.id);

    if (p) {
      this.preferiti.splice(this.preferiti.indexOf(p), 1);
    }
  }

  svuotaPreferiti() {
    this.preferiti = [];
  }
}

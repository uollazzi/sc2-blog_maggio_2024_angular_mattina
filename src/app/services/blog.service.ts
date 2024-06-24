import { Injectable } from '@angular/core';
import { Blog, Post } from '../models/blog';
import { BLOG } from '../../data/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  insiemeDiTuttiIDati: Blog = BLOG;

  preferiti: Post[] = [];

  constructor() { }

  getPosts() {
    return this.insiemeDiTuttiIDati.posts;
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

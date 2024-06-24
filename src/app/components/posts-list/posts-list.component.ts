import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Post } from '../../models/blog';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];

  constructor(public bs: BlogService) {

  }

  ngOnInit(): void {
    this.posts = this.bs.getPosts();
  }
}

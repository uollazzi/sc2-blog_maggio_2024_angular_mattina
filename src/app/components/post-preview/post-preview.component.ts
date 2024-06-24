import { Component, Input } from '@angular/core';
import { Post } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrl: './post-preview.component.css'
})
export class PostPreviewComponent {
  @Input()
  post?: Post;

  constructor(public bs: BlogService) {

  }
}

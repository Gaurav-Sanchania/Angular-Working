import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: false,
  
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  // creating instance of http client
  http = inject(HttpClient);
  allPosts : any[] = [];
  postObj : any = {
    userId: 0,
    id: 0,
    title: "",
    body: ""
  };

  getPosts() {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((res: any) => {
      this.allPosts = res;
    })
  }

  onEdit(data: any) {
    this.postObj = data;
  }

  onUpdate() {
    this.http.put("https://jsonplaceholder.typicode.com/posts/1", this.postObj).subscribe((res: any) => {
      console.log(res);
      debugger;
      alert("Put api called successfully");
    })
  }

  onSubmit() {
    this.http.post("https://jsonplaceholder.typicode.com/posts", this.postObj).subscribe((res: any) => {
      console.log(res);
      debugger;
      alert("Post api called successfully");
    })
  }
}

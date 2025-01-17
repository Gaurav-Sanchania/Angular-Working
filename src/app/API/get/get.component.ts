import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get',
  standalone: false,
  
  templateUrl: './get.component.html',
  styleUrl: './get.component.css'
})
export class GetComponent {
  userList: any[] = [];

  constructor(private http :HttpClient) {
  }

  getUser() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any) => {
      this.userList = res;
    })
  }
}

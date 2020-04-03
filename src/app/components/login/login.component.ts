import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { stringify } from 'querystring';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  


  constructor(private router: Router) { }

  ngOnInit(): void {

    
  }

  username: string;
  password: string;
}

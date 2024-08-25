import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticarService } from '../servicios/autenticar.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void { } 
  constructor(private router: Router) {}

  usuario: any = "";
  password: any = "";

  goTo(): void {
    
      this.router.navigate(['carrito']);
    
  }
}

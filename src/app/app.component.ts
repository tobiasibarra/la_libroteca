import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AutenticarService } from './servicios/autenticar.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    
  }
  title = 'Biblioteca';


  constructor(private loginPrd:AutenticarService) {

  }

  public visualizarMenu(): boolean{
    return this.loginPrd.habilitarlogeo();
  }  
  
}

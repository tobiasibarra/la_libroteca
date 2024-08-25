import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit{

  constructor(private router: Router) { }
  ngOnInit(): void {}

  

 
  goTo(where: string): void {
    this.router.navigate([where]);
  }
}

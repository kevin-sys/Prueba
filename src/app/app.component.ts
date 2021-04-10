import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba';

  constructor(private router:Router){}
  Listado(){
    this.router.navigate(["listado"]);
  }
  Creacion(){
    this.router.navigate(["creacion"]);
  
  }
  Edicion(){
    this.router.navigate(["edicion"])
  }
}

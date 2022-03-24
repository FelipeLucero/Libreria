import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularioingreso',
  templateUrl: './formularioingreso.component.html',
  styleUrls: ['./formularioingreso.component.css']
})
export class FormularioingresoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  onFileChanged(e: any){
    console.log(e[0].base64);  
  }
  

}

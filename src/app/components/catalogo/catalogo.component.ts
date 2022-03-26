import { Component, OnInit,Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Libro } from 'src/app/services/libro';
import { LibroService } from 'src/app/services/libro.service';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  @Input() libros: Libro[] = [];

  pageSize = 3;

  desde:number = 0;
  hasta:number = 3;

  cambiarpagina(e:PageEvent){
    console.log(e)
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }

  constructor(private libroService: LibroService) { }

  ngOnInit(): void {
    this.cargarLibros();
  }

  cargarLibros(): void {
    this.libroService.getLibros().subscribe(
      (data) => {
        this.libros = data.libros;
        console.log(this.libros);
      }
    );
  }

  adicionarCarrito(id:number){
    window.alert("Libro ID: "+ id + " Seleccionado")
  }


}

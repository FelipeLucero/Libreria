import { Component, OnInit,Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Libro } from 'src/app/services/libro';
import { LibroService } from 'src/app/services/libro.service';
import swal from 'sweetalert2';


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

  items:Libro[] = [];

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

  adicionarCarrito(libro:Libro): void {
    swal({
      title: 'Estas seguro',
      text: `¿Seguro que deseas Agregar el libro ${libro.nombre} del autor ${libro.autor}?`,
      type: 'warning',
      showCancelButton : true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      cancelButtonClass: 'btn btn-danger ms-2',
      confirmButtonClass: 'btn btn-success ms-2',
      buttonsStyling: false,
      reverseButtons: false
    }).
    then((result) => {
      if(result.value) {
        this.items.push(libro);
        console.log(libro);
        swal('Libro Agregado', `El libro ${libro.nombre} ha sido agrega al carrito de compras!`, 'success')
      }
    })
  }

  limpiarCarrito(){
    this.items=[];
    return this.items;
  }

  listarCarrito(){
    return this.items;
  }

}
